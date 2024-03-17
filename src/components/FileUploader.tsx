"use client";

import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";

import React, { useState } from "react";

import { Dashboard } from "@uppy/react";
import Tus from "@uppy/tus";
import Uppy from "@uppy/core";

const supabaseUploadURL = `${process.env.NEXT_PUBLIC_SUPABASE_URL!}/storage/v1/upload/resumable`;

interface FileUploaderProps {
  accessToken: string;
  bucketName: string;
  folderName?: string;
}

export default function FileUploader({
  accessToken,
  bucketName,
  folderName,
}: FileUploaderProps) {
  const [uppy] = useState(() =>
    new Uppy().use(Tus, {
      endpoint: supabaseUploadURL,
      headers: {
        authorization: `Bearer ${accessToken}`,
        "x-upsert": "true",
      },
      chunkSize: 6 * 1024 * 1024,
      allowedMetaFields: [
        "bucketName",
        "objectName",
        "contentType",
        "cacheControl",
      ],
    })
  );

  uppy.on("file-added", (file) => {
    file.meta = {
      ...file.meta,
      bucketName: bucketName,
      objectName: folderName ? `${folderName}/${file.name}` : file.name,
      contentType: file.type,
    };
  });

  uppy.on("error", (error) => {
    console.error("Error", error);
  });

  uppy.on("upload", (data) => {
    console.log("Upload started with data:", data);
  });

  uppy.on("upload-error", (file, error) => {
    console.error("Error uploading file:", file?.name, error);
  });

  uppy.on("complete", (result) => {
    console.log(
      "Upload complete! We’ve uploaded these files:",
      result.successful
    );
  });

  return <Dashboard uppy={uppy} showProgressDetails={true} />;
}

import NewPropertyResidentialFormUpdated from "./_components/NewPropertyResidentialFormUpdated";

export default function NewPropertyResidentialPage() {
  return (
    <div className="flex h-full w-full flex-col space-y-4">
      <div>
        <h4>New residential property</h4>
        <p className="text-pretty">
          Please fill out the form below to add a new property
        </p>
      </div>
      <NewPropertyResidentialFormUpdated />
    </div>
  );
}

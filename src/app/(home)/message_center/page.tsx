import MessageCard from "@/src/components/message_center/messageCard";

export default function MessageCenterPage() {
  const messages = [
    {
      sender_id: "0001",
      sender_firstname: "Francesco",
      sender_lastname: "Limoni",
      time: "23:59",
      last_message: "Last message here...",
    },
    {
      sender_id: "0002",
      sender_firstname: "Jacopo",
      sender_lastname: "Imparato",
      time: "8:12",
      last_message: "Last message here...",
    },
    {
      sender_id: "0003",
      sender_firstname: "Marco",
      sender_lastname: "Gelli",
      time: "14:27",
      last_message: "Last message here...",
    },
  ];

  return (
    <main className="flex flex-row h-full w-full">
      <div className="w-[28%] h-full flex flex-col space-y-0 p-1 ">
        <MessageCard
          sender_id={messages[0].sender_id}
          time={messages[0].time}
          last_message={messages[0].last_message}
          sender_firstname={messages[0].sender_firstname}
          sender_lastname={messages[0].sender_lastname}
        />
        <MessageCard
          sender_id={messages[1].sender_id}
          time={messages[1].time}
          last_message={messages[1].last_message}
          sender_firstname={messages[1].sender_firstname}
          sender_lastname={messages[1].sender_lastname}
        />
        <MessageCard
          sender_id={messages[2].sender_id}
          time={messages[2].time}
          last_message={messages[2].last_message}
          sender_firstname={messages[2].sender_firstname}
          sender_lastname={messages[2].sender_lastname}
        />
      </div>
      <div className="w-full h-full bg-red-50"></div>
    </main>
  );

  function ContactTile() {
    return (
      <div className="w-full flex flex-row px-2 py-4 rounded-md hover:bg-slate-100">
        <div className="w-full h-full flex flex-col space-y-0">
          <p className="text-sm font-medium">{"Firstname lastname"}</p>
          <p className="text-xs font-normal">{"Last message here..."}</p>
        </div>
        <p className="text-xs font-normal opacity-50">{"23:59"}</p>
      </div>
    );
  }
}

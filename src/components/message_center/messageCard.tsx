interface MessageCardProps {
  sender_id: string;
  sender_firstname: string;
  sender_lastname: string;
  time: string;
  last_message: string;
}

export default function MessageCard(prop: MessageCardProps) {
  const name = prop.sender_firstname + " " + prop.sender_lastname;

  return (
    <div className="w-full flex flex-row px-2 py-4 rounded-md hover:bg-slate-100">
      <div className="w-full h-full flex flex-col space-y-0">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs font-normal">{prop.last_message}</p>
      </div>
      <p className="text-xs font-normal opacity-50">{prop.time}</p>
    </div>
  );
}

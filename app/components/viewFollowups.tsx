import { getFollowups } from "../actions/followups";

export default async function ViewFollowups({ id }: { id: number }) {
    const followUps = await getFollowups(id)

    return (
        <div>
        <p className="font-bold mt-2">Follow-ups:</p>
        <ul>
          {followUps.map((followUp: any, index: number) => (
            <li key={index}>{followUp.text}</li>
          ))}
        </ul>
      </div>
    );
}
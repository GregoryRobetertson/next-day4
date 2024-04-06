'use client';




export default function UserProfile({name, bio, hobbies}) {
   return (
  <div>
<h2>{name}</h2>
    <p>{bio}</p>
 
    <ul>
    {hobbies?.map((hobby) => (
    <li key={crypto.randomUUID}>{hobby}</li>
    ))}
</ul>
  </div>
   )
}

'use client';
import React, { useState } from 'react'
import UserProfile from './UserProfile';

export default function UserData() {
    const [name, setName] = useState('Sam');
    const [bio, setBio] = useState('No biography available');
    const [hobbies, setHobbies] = useState(["football", "basketball", "baseball"] )
console.log(hobbies);
  return (
    <UserProfile 
    name={name}
    bio={bio}
    hobbies={hobbies}
 />
  )
}


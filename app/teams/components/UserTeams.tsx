"use client"
import { TeamsByUserProvider } from '@/context/useTeamsByUser'
import React, { useEffect } from 'react'
import TeamList from './TeamList'
import { useUser } from '@/hooks/useUser'
import { useRouter } from 'next/navigation'

const UserTeams = () => {

const { user, isLoading } = useUser();
const router = useRouter();

useEffect(() => {
    if (!isLoading && !user) {
        router.replace('/');
    }
}, [isLoading, user, router]);

if (!user) return null;

return (
    <TeamsByUserProvider user={user!}>
        <TeamList />
    </TeamsByUserProvider>
)
}

export default UserTeams
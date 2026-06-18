export interface Character {
    _id?: string;
    name: string;
    description: string;
    species: string;
    isHibernating: boolean;
    bestFriend?: string;
}
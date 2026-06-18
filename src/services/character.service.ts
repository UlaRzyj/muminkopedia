import { Character } from "../types/character";
import {
    createCharacterInDB,
    findAllCharacters
} from "../repositories/character.repository";

export const getAllCharacters = async (): Promise<Character[]> => {
    return await findAllCharacters();
};

export const createCharacter = async (
    characterData: Character
): Promise<Character> => {

    if (!characterData.name.trim()) {
        throw new Error("Character name is required");
    }

    return await createCharacterInDB(characterData);
};
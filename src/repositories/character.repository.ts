import { CharacterModel } from "../models/character.model";
import { Character } from "../types/character";

export const findAllCharacters = async (): Promise<Character[]> => {
    return await CharacterModel.find();
};

export const createCharacterInDB = async (
    characterData: Character
): Promise<Character> => {

    const character = new CharacterModel(characterData);

    return await character.save();
};
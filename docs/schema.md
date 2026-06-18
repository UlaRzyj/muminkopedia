# Schema

## Character

Reprezentuje postać w systemie.

| Pole | Typ | Opis |
|------|-----|------|
| `name` | `string` | Nazwa postaci |
| `description` | `string` | Opis postaci |
| `species` | `string` | Gatunek postaci |
| `isHibernating` | `boolean` | Czy postać aktualnie hibernuje |
| `bestFriend` | `ObjectId` | Referencja do najlepszego przyjaciela (inny `Character`) |

---

## Artifact

Reprezentuje przedmiot należący do postaci.

| Pole | Typ | Opis |
|------|-----|------|
| `name` | `string` | Nazwa artefaktu |
| `description` | `string` | Opis artefaktu |
| `owner` | `ObjectId` | Referencja do właściciela (`Character`) |

---

Jeśli postać zostanie usunięta, jej artefakty pozostają w bazie z `owner: null`.

## Endpointy

### Characters
| Metoda | Ścieżka | Opis |
|--------|---------|------|
| GET | `/api/characters` | Pobierz wszystkie postaci |
| POST | `/api/characters` | Utwórz nową postać |

### Artifacts
| Metoda | Ścieżka | Opis |
|--------|---------|------|
| GET | `/api/artifacts` | Pobierz wszystkie artefakty |
| POST | `/api/artifacts` | Utwórz nowy artefakt |
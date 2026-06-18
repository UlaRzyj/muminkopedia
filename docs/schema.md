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

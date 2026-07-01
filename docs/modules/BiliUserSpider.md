# Bili User Spider

`Bili User Spider` monitors Bilibili users' live danmaku activity through `Browser CDP`.

## Options

- `Live Chatter Prefix`: controls synced danmaku prefix. `User` prints `User: msg`; `User & Room` prints `User (in roomId): msg`; `User & Room Host` prints `User (in Host's room): msg`; `User & Room Title` prints `User (in ROOM TITLE): msg`.
- `Live Chatter Console Output`: `Detailed` prints `timestamp [WealthLevel] [Medal] Username (in Host's room ROOM TITLE (roomId)) >> Msg`. The medal is shown only when its bound room can be confirmed and matches the current live room.
- `Live Chatter Time Diff Threshold (s)`: limits first successful sync output to recent danmaku within the configured timestamp difference.

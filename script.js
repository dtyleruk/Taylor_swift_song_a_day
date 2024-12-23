// Array of Taylor Swift songs and their corresponding Spotify embed URLs
/*
const songs = [
    { title: "Love Story", url: "2fPvQfGQEZOKtJ9qXeL4x8" },
    { title: "Blank Space", url: "1u8c2t2Cy7UBoG4ArRcF5g" },
    { title: "Shake It Off", url: "0V3wPSX9ygBnCm8psDIegu" }
];
*/

// Array of Taylor Swift songs and their corresponding Spotify track ids 
const songs = [
  {
    "title": "I Can Do It With a Broken Heart",
    "url": "2fPvQfGQEZOKtJ9qXeL4x8?si"
  },
  {
    "title": "I Can Do It With a Broken Heart - Dombresky Remix",
    "url": "0hFF0aqyjDwDh6SQwRbTyx?si"
  },
  {
    "title": "Fortnight (feat. Post Malone)",
    "url": "6dODwocEuGzHAavXqTbwHv?si"
  },
  {
    "title": "The Tortured Poets Department",
    "url": "4PdLaGZubp4lghChqp8erB?si"
  },
  {
    "title": "My Boy Only Breaks His Favorite Toys",
    "url": "7uGYWMwRy24dm7RUDDhUlD?si"
  },
  {
    "title": "Down Bad",
    "url": "1kbEbBdEgQdQeLXCJh28pJ?si"
  },
  {
    "title": "So Long, London",
    "url": "7wAkQFShJ27V8362MqevQr?si"
  },
  {
    "title": "But Daddy I Love Him",
    "url": "4QMgEffJQuKtjCNvqfRZ0m?si"
  },
  {
    "title": "Fresh Out The Slammer",
    "url": "7IWcDWOfiooH5hRs9XOVYz?si"
  },
  {
    "title": "Florida!!! (feat. Florence + The Machine)",
    "url": "5ExOm0dh4NyRyAdSAO9hyM?si"
  },
  {
    "title": "Guilty as Sin?",
    "url": "799KrpEbhZp0MHeiA8YK9P?si"
  },
  {
    "title": "Who’s Afraid of Little Old Me?",
    "url": "2d8UxVNhJinc8uat9PoM9y?si"
  },
  {
    "title": "I Can Fix Him (No Really I Can)",
    "url": "5chnRTB9qMK3W1M41SnU9s?si"
  },
  {
    "title": "loml",
    "url": "3YkNIrAvbKNrrwwEd7NVLl?si"
  },
  {
    "title": "The Smallest Man Who Ever Lived",
    "url": "1xtw1krCR6Dw2KwkXw5z63?si"
  },
  {
    "title": "The Alchemy",
    "url": "1tuNqJOtRQVHvONR8Lg3MZ?si"
  },
  {
    "title": "Clara Bow",
    "url": "4d9PtIEVij9jW5OaLinH66?si"
  },
  {
    "title": "The Black Dog",
    "url": "62E2nR0od0M5HYxuYLaDz7?si"
  },
  {
    "title": "imgonnagetyouback",
    "url": "1kcwpPDQnqEqmezzXdJTCP?si"
  },
  {
    "title": "The Albatross",
    "url": "4EF6IyONolQy0bIQXm2EmX?si"
  },
  {
    "title": "Chloe or Sam or Sophia or Marcus",
    "url": "1rmEsOezwf2lmIZTMAO5Ag?si"
  },
  {
    "title": "How Did It End?",
    "url": "5Bedn0svl0ZD7RGmJkmKKw?si"
  },
  {
    "title": "So High School",
    "url": "7Mts0OfPorF4iwOomvfqn1?si"
  },
  {
    "title": "I Hate It Here",
    "url": "3hlGuz3loYoLfI3bpwieWq?si"
  },
  {
    "title": "thanK you aIMee",
    "url": "7ogK4lJDVDMU6A6vYR5rvD?si"
  },
  {
    "title": "I Look in People's Windows",
    "url": "1Zai5UJ2di3qEuR2HeT2s8?si"
  },
  {
    "title": "The Prophecy",
    "url": "18WFFUIsewmA8g31KAeo3e?si"
  },
  {
    "title": "Cassandra",
    "url": "0g4fMVo4JjwnIpTfFfLdxS?si"
  },
  {
    "title": "Peter",
    "url": "3zMDGj4D8ogaYgAIZPeU7S?si"
  },
  {
    "title": "The Bolter",
    "url": "2913xXOVAIDAqxzV2g4VcU?si"
  },
  {
    "title": "Robin",
    "url": "2CnjDMdpRjlWv04Xk3s6MW?si"
  },
  {
    "title": "The Manuscript",
    "url": "1DTRUYVd8rYpla9hhVVwjo?si"
  },
  {
    "title": "Fortnight (feat. Post Malone) - BLOND:ISH Remix",
    "url": "1gejz5ROvJBUb6WJzkMAcc?si"
  },
  {
    "title": "Welcome To New York (Taylor's Version)",
    "url": "1hR8BSuEqPCCZfv93zzzz9?si"
  },
  {
    "title": "Blank Space (Taylor's Version)",
    "url": "45wMBGri1PORPjM9PwFfrS?si"
  },
  {
    "title": "Style (Taylor's Version)",
    "url": "1hjRhYpWyqDpPahmSlUTlc?si"
  },
  {
    "title": "Out Of The Woods (Taylor's Version)",
    "url": "045ZeOHPIzhxxsm8bq5kyE?si"
  },
  {
    "title": "All You Had To Do Was Stay (Taylor's Version)",
    "url": "6GXgd1BPD9bUpqw5AntGV5?si"
  },
  {
    "title": "Shake It Off (Taylor's Version)",
    "url": "3pv7Q5v2dpdefwdWIvE7yH?si"
  },
  {
    "title": "I Wish You Would (Taylor's Version)",
    "url": "43y1WpBdnEy5TR9aZoSQL9?si"
  },
  {
    "title": "Bad Blood (Taylor's Version)",
    "url": "64FzgoLZ3oXu2SriZblHic?si"
  },
  {
    "title": "Wildest Dreams (Taylor's Version)",
    "url": "1K39ty6o1sHwwlZwO6a7wK?si"
  },
  {
    "title": "How You Get The Girl (Taylor's Version)",
    "url": "75W3SngKzTuoQ94uLf3y82?si"
  },
  {
    "title": "This Love (Taylor’s Version)",
    "url": "5QVVjX0ZItqlVpEuVCM9Yg?si"
  },
  {
    "title": "I Know Places (Taylor's Version)",
    "url": "2f0GI2ZLUtbGqFx8t2Gk6A?si"
  },
  {
    "title": "Clean (Taylor's Version)",
    "url": "2ByBBvpR9b7IynvRmnG7kG?si"
  },
  {
    "title": "Wonderland (Taylor's Version)",
    "url": "2ve0kuaWUCt4Zx8x4bf1MR?si"
  },
  {
    "title": "You Are In Love (Taylor's Version)",
    "url": "4UwqOWDpdeIDVQDuKT6iza?si"
  },
  {
    "title": "New Romantics (Taylor's Version)",
    "url": "2vPMoMDXxu9uX1igWZmXSG?si"
  },
  {
    "title": "\"Slut!\" (Taylor's Version) (From The Vault)",
    "url": "71BqAINEnezjQfxE4VuJfq?si"
  },
  {
    "title": "Say Don't Go (Taylor's Version) (From The Vault)",
    "url": "4NioO5R9sHEZh4cGzMHyNt?si"
  },
  {
    "title": "Now That We Don't Talk (Taylor's Version) (From The Vault)",
    "url": "5KD6AEm19QnMbfWpfoOHMl?si"
  },
  {
    "title": "Suburban Legends (Taylor's Version) (From The Vault)",
    "url": "6T0sEnqjmHISIKwFETeeiP?si"
  },
  {
    "title": "Is It Over Now? (Taylor's Version) (From The Vault)",
    "url": "1Iq8oo9XkmmvCQiGOfORiz?si"
  },
  {
    "title": "Bad Blood (feat. Kendrick Lamar) (Taylor's Version)",
    "url": "6qAcApH8obo8eqatCKUHd9?si"
  },
  {
    "title": "Cruel Summer - Live from TS | The Eras Tour",
    "url": "6ClYMObS7f3Nn4AiZHYQt3?si"
  },
  {
    "title": "Cruel Summer",
    "url": "1BxfuPKGuaTgP7aM0Bbdwr?si"
  },
  {
    "title": "Cruel Summer - LP Giobbi Remix",
    "url": "0pjBqAz8GlxGlpaU4W0DxS?si"
  },
  {
    "title": "Mine (Taylor's Version)",
    "url": "7G0gBu6nLdhFDPRLc0HdDG?si"
  },
  {
    "title": "Sparks Fly (Taylor’s Version)",
    "url": "3MytWN8L7shNYzGl4tAKRp?si"
  },
  {
    "title": "Back To December (Taylor's Version)",
    "url": "79uDOz0zuuWS7HWxzMmTa2?si"
  },
  {
    "title": "Speak Now (Taylor's Version)",
    "url": "5xXqyjLicvEpch72qEryFT?si"
  },
  {
    "title": "Dear John (Taylor's Version)",
    "url": "1zU8j1x3yi9xalMF96pzKp?si"
  },
  {
    "title": "Mean (Taylor's Version)",
    "url": "30Y4CV7A6YqtQtTTo7Ue4j?si"
  },
  {
    "title": "The Story Of Us (Taylor's Version)",
    "url": "6dTA6y0C2ReQklntzZl8l3?si"
  },
  {
    "title": "Never Grow Up (Taylor's Version)",
    "url": "2EFZ9emtKWEglWUQGEQ3P9?si"
  },
  {
    "title": "Enchanted (Taylor's Version)",
    "url": "3sW3oSbzsfecv9XoUdGs7h?si"
  },
  {
    "title": "Better Than Revenge (Taylor's Version)",
    "url": "0NwGC0v03ysCYINtg6ns58?si"
  },
  {
    "title": "Innocent (Taylor's Version)",
    "url": "12nBPF4Rh4XLFJV0YLN7uj?si"
  },
  {
    "title": "Haunted (Taylor's Version)",
    "url": "4tMzIAFTFdqGBQLdfbPces?si"
  },
  {
    "title": "Last Kiss (Taylor's Version)",
    "url": "59KOoHFcw5XfICnO57holu?si"
  },
  {
    "title": "Long Live (Taylor's Version)",
    "url": "4hqJ4bSlYJOXb6Z4SRmzxs?si"
  },
  {
    "title": "Ours (Taylor’s Version)",
    "url": "3yNJkriPzWjkkDAWHIAVUq?si"
  },
  {
    "title": "Superman (Taylor’s Version)",
    "url": "4evLyY5Ue1Wesc61t2KXAU?si"
  },
  {
    "title": "Electric Touch (feat. Fall Out Boy) (Taylor’s Version) (From The Vault)",
    "url": "4e3ZNTAV6PCrdYMUrUlMpQ?si"
  },
  {
    "title": "When Emma Falls in Love (Taylor’s Version) (From The Vault)",
    "url": "0zo975x58DlXbZllWvfYhg?si"
  },
  {
    "title": "I Can See You (Taylor’s Version) (From The Vault)",
    "url": "5kHMfzgLZP95O9NBy0ku4v?si"
  },
  {
    "title": "Castles Crumbling (feat. Hayley Williams) (Taylor’s Version) (From The Vault)",
    "url": "4ABYxlb92WBIjHu7TIKmml?si"
  },
  {
    "title": "Foolish One (Taylor’s Version) (From The Vault)",
    "url": "4s8BIKx4Zh6ryAEz8RTlaU?si"
  },
  {
    "title": "Timeless (Taylor’s Version) (From The Vault)",
    "url": "1HCdems7PQZRj42QDWLA0A?si"
  },
  {
    "title": "You’re Losing Me (From The Vault)",
    "url": "3CWq0pAKKTWb0K4yiglDc4?si"
  },
  {
    "title": "Karma (feat. Ice Spice)",
    "url": "4i6cwNY6oIUU2XZxPIw82Y?si"
  },
  {
    "title": "Hits Different",
    "url": "3xYJScVfxByb61dYHTwiby?si"
  },
  {
    "title": "Snow On The Beach (feat. More Lana Del Rey)",
    "url": "4zmKGsrXjLmljb5fTaBTot?si"
  },
  {
    "title": "Karma",
    "url": "7KokYm8cMIXCsGVmUvKtqf?si"
  },
  {
    "title": "Lavender Haze",
    "url": "5jQI2r1RdgtuT8S3iG8zFC?si"
  },
  {
    "title": "All Of The Girls You Loved Before",
    "url": "4P9Q0GojKVXpRTJCaL3kyy?si"
  },
  {
    "title": "Safe & Sound (feat. Joy Williams and John Paul White) (Taylor’s Version)",
    "url": "2RJnNdu4pb3MypbBroHU0T?si"
  },
  {
    "title": "Anti-Hero",
    "url": "0V3wPSX9ygBnCm8psDIegu?si"
  },
  {
    "title": "Lavender Haze - Acoustic Version",
    "url": "05kJkr80XEaZeN8kxyQoFp?si"
  },
  {
    "title": "Eyes Open (Taylor's Version)",
    "url": "2NIBaWXdjaTDmytjjwbEfP?si"
  },
  {
    "title": "If This Was A Movie (Taylor’s Version)",
    "url": "0kAZ3H6G9Zac4PMpmobMkj?si"
  },
  {
    "title": "Lavender Haze - Snakehips Remix",
    "url": "6F67FNdOBNMFzxdj1CQ5pL?si"
  },
  {
    "title": "Lavender Haze - Tensnake Remix",
    "url": "7kjSmkSo15pHlkb0mOQtfj?si"
  },
  {
    "title": "Lavender Haze - Jungle Remix",
    "url": "0ThxqUZ9PwS6n0UT5i1XH6?si"
  },
  {
    "title": "Lavender Haze - Felix Jaehn Remix",
    "url": "5KxZfCXXmVvKhPo8hQz2pS?si"
  },
  {
    "title": "Lavender Haze",
    "url": "5NlYplrGsjUDFZ6x3HeVyT?si"
  },
  {
    "title": "Lavender Haze - Felix Jaehn Remix",
    "url": "2M4tVhRXucLE9M3STv21Yi?si"
  },
  {
    "title": "Anti-Hero - ILLENIUM Remix",
    "url": "6C0H8ts9M6deezz0yYR6LK?si"
  },
  {
    "title": "Anti-Hero - Acoustic Version",
    "url": "2d3d9xZutJjmUpntiyHt3F?si"
  },
  {
    "title": "Anti-Hero (feat. Bleachers)",
    "url": "16M9Rxid0nXhVmme7lzVwN?si"
  },
  {
    "title": "Anti-Hero - Roosevelt Remix",
    "url": "4XiypEn8iKbeP1TbTqdfk5?si"
  },
  {
    "title": "Anti-Hero - Kungs Remix",
    "url": "2oWpe2L8ypC080BxpDVuTY?si"
  },
  {
    "title": "Anti-Hero - Jayda G Remix",
    "url": "4YrpqEBNuz7IMsZtUP6bNQ?si"
  },
  {
    "title": "Anti-Hero (feat. Bleachers)",
    "url": "0j0gJqxitjhmmkrW56dtQH?si"
  },
  {
    "title": "Maroon",
    "url": "3eX0NZfLtGzoLUxPNvRfqm?si"
  },
  {
    "title": "Snow On The Beach (feat. Lana Del Rey)",
    "url": "1wtOxkiel43cVs0Yux5Q4h?si"
  },
  {
    "title": "You're On Your Own, Kid",
    "url": "4D7BCuvgdJlYvlX5WlN54t?si"
  },
  {
    "title": "Midnight Rain",
    "url": "3rWDp9tBPQR9z6U5YyRSK4?si"
  },
  {
    "title": "Question...?",
    "url": "0heeNYlwOGuUSe7TgUD27B?si"
  },
  {
    "title": "Vigilante Shit",
    "url": "1xwAWUI6Dj0WGC3KiUPN0O?si"
  },
  {
    "title": "Bejeweled",
    "url": "3qoftcUZaUOncvIYjFSPdE?si"
  },
  {
    "title": "Labyrinth",
    "url": "0A1JLUlkZkp2EFrosoNQi0?si"
  },
  {
    "title": "Sweet Nothing",
    "url": "0wavGRldH0AWyu2zvTz8zb?si"
  },
  {
    "title": "Mastermind",
    "url": "7FmYn9e7KHMXcxqGSj9LjH?si"
  },
  {
    "title": "The Great War",
    "url": "3UMrglJeju5yWyYIW6o99b?si"
  },
  {
    "title": "Bigger Than The Whole Sky",
    "url": "0BiqmkasE5FdrChwKfVp8X?si"
  },
  {
    "title": "Paris",
    "url": "7712gjoih4QoDbXpljEk21?si"
  },
  {
    "title": "High Infidelity",
    "url": "5kiZGSxgqPdv6rbqL9THdd?si"
  },
  {
    "title": "Glitch",
    "url": "6wAFvJPpTZVirBKGZ4EnMW?si"
  },
  {
    "title": "Would've, Could've, Should've",
    "url": "0aV5uARAknQgYhBaK944FP?si"
  },
  {
    "title": "Dear Reader",
    "url": "3QF5RsWzK1lCvf2o2cY65P?si"
  },
  {
    "title": "Carolina - From The Motion Picture “Where The Crawdads Sing”",
    "url": "4axSuOg3BqsowKjRpj59RU?si"
  },
  {
    "title": "This Love (Taylor’s Version)",
    "url": "4d1CG5ei1E2vGbvmgf5KKv?si"
  },
  {
    "title": "august",
    "url": "3hUxzQpSfdDqwM3ZTFQY0K?si"
  },
  {
    "title": "Wildest Dreams (Taylor's Version)",
    "url": "1IxeJLsubGTboNN9K5XNfL?si"
  },
  {
    "title": "All Too Well (10 Minute Version) (The Short Film)",
    "url": "1u4HUiREUR6vX1W1RYG2Tm?si"
  },
  {
    "title": "The Joker And The Queen (feat. Taylor Swift)",
    "url": "6N1K5OVVCopBjGViHs2IvP?si"
  },
  {
    "title": "Message In A Bottle (Fat Max G Remix) (Taylor’s Version)",
    "url": "3tGq7hWDCtrnL83y5OGual?si"
  },
  {
    "title": "All Too Well (Sad Girl Autumn Version) - Recorded at Long Pond Studios",
    "url": "1n3b9Eekoy3S9ZSZ5DmTW1?si"
  },
  {
    "title": "Message In A Bottle (Taylor's Version) (From The Vault)",
    "url": "3z6XUommYDWPHeFhmhhT6j?si"
  },
  {
    "title": "Run (feat. Ed Sheeran) (Taylor’s Version) (From The Vault)",
    "url": "4IQkfUsrwXol38VV3U7t7T?si"
  },
  {
    "title": "I Bet You Think About Me (feat. Chris Stapleton) (Taylor’s Version) (From The Vault)",
    "url": "4CkgMiMqZ5JzW9iYXSTMTL?si"
  },
  {
    "title": "All Too Well (10 Minute Version) (Taylor's Version) (From The Vault)",
    "url": "5enxwA8aAbwZbf5qCHORXi?si"
  },
  {
    "title": "Nothing New (feat. Phoebe Bridgers) (Taylor’s Version) (From The Vault)",
    "url": "01K4zKU104LyJ8gMb7227B?si"
  },
  {
    "title": "Forever Winter (Taylor's Version) (From The Vault)",
    "url": "3oGVx9RBmiYGv5ZCecWLkx?si"
  },
  {
    "title": "Babe (Taylor's Version) (From The Vault)",
    "url": "0v4z1tuZvn6LGknom9Qx7d?si"
  },
  {
    "title": "Better Man (Taylor's Version) (From The Vault)",
    "url": "4OmFmE0fzcMG6g0Y8p4eSD?si"
  },
  {
    "title": "The Very First Night (Taylor's Version) (From The Vault)",
    "url": "6pYNq0ZwpPVazKzsqpf0G8?si"
  },
  {
    "title": "State Of Grace (Taylor's Version)",
    "url": "6lzc0Al0zfZOIFsFvBS1ki?si"
  },
  {
    "title": "Red (Taylor's Version)",
    "url": "4OAuvHryIVv4kMDNSLuPt6?si"
  },
  {
    "title": "Treacherous (Taylor's Version)",
    "url": "3S7HNKPakdwNEBFIVTL6dZ?si"
  },
  {
    "title": "I Knew You Were Trouble (Taylor's Version)",
    "url": "6AtZLIzUINvExIUy4QhdjP?si"
  },
  {
    "title": "All Too Well (Taylor's Version)",
    "url": "3nsfB1vus2qaloUdcBZvDu?si"
  },
  {
    "title": "22 (Taylor's Version)",
    "url": "3yII7UwgLF6K5zW3xad3MP?si"
  },
  {
    "title": "I Almost Do (Taylor's Version)",
    "url": "2r9CbjYgFhtAmcFv1cSquB?si"
  },
  {
    "title": "We Are Never Ever Getting Back Together (Taylor's Version)",
    "url": "5YqltLsjdqFtvqE7Nrysvs?si"
  },
  {
    "title": "Stay Stay Stay (Taylor's Version)",
    "url": "7eQj6r5PIdYKEIZjucBMcq?si"
  },
  {
    "title": "The Last Time (feat. Gary Lightbody of Snow Patrol) (Taylor’s Version)",
    "url": "0y6kdSRCVQhSsHSpWvTUm7?si"
  },
  {
    "title": "Holy Ground (Taylor's Version)",
    "url": "7J4b3LVCIGO4CMBDFLPoP6?si"
  },
  {
    "title": "Sad Beautiful Tragic (Taylor's Version)",
    "url": "73qMN9bXy7MSPwwGfH3wQr?si"
  },
  {
    "title": "The Lucky One (Taylor's Version)",
    "url": "4e5ayHsOLJNLTGfjau2mEw?si"
  },
  {
    "title": "Everything Has Changed (feat. Ed Sheeran) (Taylor’s Version)",
    "url": "7qEUFOVcxRI19tbT68JcYK?si"
  },
  {
    "title": "Starlight (Taylor's Version)",
    "url": "7A2cNLRT0YJc1yjxHlKihs?si"
  },
  {
    "title": "Begin Again (Taylor's Version)",
    "url": "05GsNucq8Bngd9fnd4fRa0?si"
  },
  {
    "title": "The Moment I Knew (Taylor's Version)",
    "url": "0NRHj8hDwwmSPaA41o379r?si"
  },
  {
    "title": "Come Back...Be Here (Taylor's Version)",
    "url": "4pNApnaUWAL2J4KO2eqokq?si"
  },
  {
    "title": "Girl At Home (Taylor's Version)",
    "url": "0DMVrlMUn01M0IcpDbwgu7?si"
  },
  {
    "title": "State Of Grace (Acoustic Version) (Taylor's Version)",
    "url": "5jAIouBES8LWMiriuNq170?si"
  },
  {
    "title": "Ronan (Taylor's Version)",
    "url": "7nWui6jiMM2m9qFmET1Mtj?si"
  },
  {
    "title": "the lakes - original version",
    "url": "0UAdDYrkCvVQftaKpL6q5f?si"
  },
  {
    "title": "Renegade (feat. Taylor Swift)",
    "url": "73W5aXorr5vxrySFcoZqIN?si"
  },
  {
    "title": "cardigan",
    "url": "4R2kfaDFhslZEMJqAFNpdd?si"
  },
  {
    "title": "exile (feat. Bon Iver)",
    "url": "4pvb0WLRcMtbPGmtejJJ6y?si"
  },
  {
    "title": "betty",
    "url": "5kI4eCXXzyuIUXjQra0Cxi?si"
  },
  {
    "title": "this is me trying",
    "url": "7kt9e9LFSpN1zQtYEl19o1?si"
  },
  {
    "title": "the 1",
    "url": "0Jlcvv8IykzHaSmj49uNW8?si"
  },
  {
    "title": "the last great american dynasty",
    "url": "2Eeur20xVqfUoM3Q7EFPFt?si"
  },
  {
    "title": "my tears ricochet",
    "url": "1MgV7FIyNxIG7WzMRJV5HC?si"
  },
  {
    "title": "mirrorball",
    "url": "0ZNU020wNYvgW84iljPkPP?si"
  },
  {
    "title": "seven",
    "url": "6KJqZcs9XDgVck7Lg9QOTC?si"
  },
  {
    "title": "illicit affairs",
    "url": "2NmsngXHeC1GQ9wWrzhOMf?si"
  },
  {
    "title": "invisible string",
    "url": "6VsvKPJ4xjVNKpI8VVZ3SV?si"
  },
  {
    "title": "mad woman",
    "url": "2QDyYdZyhlP2fp79KZX8Bi?si"
  },
  {
    "title": "epiphany",
    "url": "08fa9LFcFBTcilB3iq2e2A?si"
  },
  {
    "title": "peace",
    "url": "7MbT4I8qGntX4fMdqMQgke?si"
  },
  {
    "title": "hoax",
    "url": "6MWoRt97mnSTXZhu3ggi9C?si"
  },
  {
    "title": "cardigan - cabin in candlelight version",
    "url": "2hmafYGj1CXYKIYcMnX4lj?si"
  },
  {
    "title": "the lakes - bonus track",
    "url": "0eFQWVz0qIxDOvhLpZ40P7?si"
  },
  {
    "title": "Love Story (Taylor’s Version)",
    "url": "3CeCwYWvdfXbZLXFhBrbnf?si"
  },
  {
    "title": "Fearless (Taylor’s Version)",
    "url": "77sMIMlNaSURUAXq5coCxE?si"
  },
  {
    "title": "Fifteen (Taylor’s Version)",
    "url": "2nqio0SfWg6gh2eCtfuMa5?si"
  },
  {
    "title": "Love Story (Taylor’s Version)",
    "url": "6YvqWjhGD8mB5QXcbcUKtx?si"
  },
  {
    "title": "Hey Stephen (Taylor’s Version)",
    "url": "550erGcdD9n6PnwxrvYqZT?si"
  },
  {
    "title": "White Horse (Taylor’s Version)",
    "url": "5YL553x8sHderRBDlm3NM3?si"
  },
  {
    "title": "You Belong With Me (Taylor’s Version)",
    "url": "1qrpoAMXodY6895hGKoUpA?si"
  },
  {
    "title": "Breathe (feat. Colbie Caillat) (Taylor’s Version)",
    "url": "7HC7R2D8WjXVcUHJyEGjRs?si"
  },
  {
    "title": "Tell Me Why (Taylor’s Version)",
    "url": "0k0vFacOHNuArLWMiH60p7?si"
  },
  {
    "title": "You’re Not Sorry (Taylor’s Version)",
    "url": "6iiAfo4wTA2CVC3Uwx9uh8?si"
  },
  {
    "title": "The Way I Loved You (Taylor’s Version)",
    "url": "22bPsP2jCgbLUvh82U0Z3M?si"
  },
  {
    "title": "Forever & Always (Taylor’s Version)",
    "url": "1msEuwSBneBKpVCZQcFTsU?si"
  },
  {
    "title": "The Best Day (Taylor’s Version)",
    "url": "6ON9UuIq49xXY9GPmHIYRp?si"
  },
  {
    "title": "Change (Taylor’s Version)",
    "url": "3ExweHKZF9B752DPQByRVT?si"
  },
  {
    "title": "Jump Then Fall (Taylor’s Version)",
    "url": "2m3ObD945KvpE5y9A1eUWm?si"
  },
  {
    "title": "Untouchable (Taylor’s Version)",
    "url": "0tQ9vBYpldCuikPsbgOVKA?si"
  },
  {
    "title": "Forever & Always (Piano Version) (Taylor’s Version)",
    "url": "01QdEx6kFr78ZejhQtWR5m?si"
  },
  {
    "title": "Come In With The Rain (Taylor’s Version)",
    "url": "1n2wszmJyVkw6FHqyLnQsY?si"
  },
  {
    "title": "Superstar (Taylor’s Version)",
    "url": "51A8eKvvZz9uydvIZ7xRSV?si"
  },
  {
    "title": "The Other Side Of The Door (Taylor’s Version)",
    "url": "1cSFlSBdpT4F5vb1frQ231?si"
  },
  {
    "title": "Today Was A Fairytale (Taylor’s Version)",
    "url": "2JoJrsEV15OzbijS47lids?si"
  },
  {
    "title": "You All Over Me (feat. Maren Morris) (Taylor’s Version) (From The Vault)",
    "url": "4CHpVfAhuxNJ3ibExe6kxO?si"
  },
  {
    "title": "Mr. Perfectly Fine (Taylor’s Version) (From The Vault)",
    "url": "2CYVETnhM9aytqrazYYwrK?si"
  },
  {
    "title": "We Were Happy (Taylor’s Version) (From The Vault)",
    "url": "34V9RiEPe8MNdU32qJsJa1?si"
  },
  {
    "title": "That’s When (feat. Keith Urban) (Taylor’s Version) (From The Vault)",
    "url": "7eResoqEJJAVTkQYSqvO3P?si"
  },
  {
    "title": "Don’t You (Taylor’s Version) (From The Vault)",
    "url": "4uuEGH5SVuzkkSFjo2DEiY?si"
  },
  {
    "title": "Bye Bye Baby (Taylor’s Version) (From The Vault)",
    "url": "4qUijfYU8EoIWiY6oSyrgT?si"
  },
  {
    "title": "willow",
    "url": "3Uo7WG0vmLQ07WB4BDwy7D?si"
  },
  {
    "title": "willow - moonlit witch version",
    "url": "5XkJj6sV2XLMaURdmdXgNx?si"
  },
  {
    "title": "willow - lonely witch version",
    "url": "0U0etHtpARihOUUY8Akc7y?si"
  },
  {
    "title": "willow - dancing witch version (Elvira remix)",
    "url": "2NnrAdjE9cPdMklonMBuAv?si"
  },
  {
    "title": "champagne problems",
    "url": "6rap8NpGq8LDcVaJWkKFPn?si"
  },
  {
    "title": "gold rush",
    "url": "2ZTKWFG6OtHI3ewy9OGNOY?si"
  },
  {
    "title": "‘tis the damn season",
    "url": "4GBkffrtA51p17JH35irGA?si"
  },
  {
    "title": "tolerate it",
    "url": "1t2M7UYoUpmhfZNMBsymJr?si"
  },
  {
    "title": "no body, no crime (feat. HAIM)",
    "url": "6NriykdkRrjQMZo1sfVYUo?si"
  },
  {
    "title": "happiness",
    "url": "0EFdoyXHpRHhEmsOlQhIXO?si"
  },
  {
    "title": "dorothea",
    "url": "3w9VRlKPvNxj40RdUGRweH?si"
  },
  {
    "title": "coney island (feat. The National)",
    "url": "4tyX1rw9X309WkEdh2As4B?si"
  },
  {
    "title": "ivy",
    "url": "7tXMHAFEOzcUaUQqovRGho?si"
  },
  {
    "title": "cowboy like me",
    "url": "3qy4znWySY3rwzS2vHDOeg?si"
  },
  {
    "title": "long story short",
    "url": "0vVMlbdYx2080Oa9FndPZr?si"
  },
  {
    "title": "marjorie",
    "url": "7vBNFh3NIZTj6tB5s1IBjE?si"
  },
  {
    "title": "closure",
    "url": "3uayvzcbqFydIbgUeC6EJh?si"
  },
  {
    "title": "evermore (feat. Bon Iver)",
    "url": "0AaV4MJrgmLV3XhoiWXjjb?si"
  },
  {
    "title": "the 1 - the long pond studio sessions",
    "url": "08J4bMHbILkwSIhbtrcvjN?si"
  },
  {
    "title": "cardigan - the long pond studio sessions",
    "url": "3EPgWM1zfTSzEc0z4AwWTM?si"
  },
  {
    "title": "the last great american dynasty - the long pond studio sessions",
    "url": "28tIMaewZuGR8urkvFhQyA?si"
  },
  {
    "title": "exile (feat. Bon Iver) - the long pond studio sessions",
    "url": "7N015NTIWGjQDddHUdHPoO?si"
  },
  {
    "title": "my tears ricochet - the long pond studio sessions",
    "url": "5mdNyCS7ttVcAyVYOIFEjs?si"
  },
  {
    "title": "mirrorball - the long pond studio sessions",
    "url": "2yceD2hx5HhOLgkm1CITCi?si"
  },
  {
    "title": "seven - the long pond studio sessions",
    "url": "4cOWq0cVsKjxaQpRMbDoH1?si"
  },
  {
    "title": "august - the long pond studio sessions",
    "url": "4MGexoZc12lqE0hYkq9YYx?si"
  },
  {
    "title": "this is me trying - the long pond studio sessions",
    "url": "1gaLZjPrDnHQWJds2Jg4KT?si"
  },
  {
    "title": "illicit affairs - the long pond studio sessions",
    "url": "560uQyz3p5G9WdnMX39xc6?si"
  },
  {
    "title": "invisible string - the long pond studio sessions",
    "url": "5KByGq0JijSSDcy0qzuINs?si"
  },
  {
    "title": "mad woman - the long pond studio sessions",
    "url": "04xrhDrQ2WOW8GLwu7kbc0?si"
  },
  {
    "title": "epiphany - the long pond studio sessions",
    "url": "4yyKppX85ZkmlGOC2toBZA?si"
  },
  {
    "title": "betty - the long pond studio sessions",
    "url": "1mh5dObNoOvCfHmXnhvDEK?si"
  },
  {
    "title": "peace - the long pond studio sessions",
    "url": "4YHHz3VIXgNDGdoL9xC1tx?si"
  },
  {
    "title": "hoax - the long pond studio sessions",
    "url": "0QTBsdoJhamY3Aid3fOsOd?si"
  },
  {
    "title": "the lakes - the long pond studio sessions",
    "url": "6mqyTq948oap5AkyTsd6XF?si"
  },
  {
    "title": "Daylight - Live From Paris",
    "url": "7ryS0xBZNYjQqql34GCkDp?si"
  },
  {
    "title": "Cornelia Street - Live From Paris",
    "url": "3fGnrtrtL1IHSX9t4DKOYf?si"
  },
  {
    "title": "the 1 - the long pond studio sessions",
    "url": "08J4bMHbILkwSIhbtrcvjN?si"
  },
  {
    "title": "hoax - the long pond studio sessions",
    "url": "0QTBsdoJhamY3Aid3fOsOd?si"
  },
  {
    "title": "The Man",
    "url": "3RauEVgRgj1IuWdJ9fDs70?si"
  },
  {
    "title": "I Forgot That You Existed",
    "url": "43rA71bccXFGD4C8GOpIlN?si"
  },
  {
    "title": "Lover",
    "url": "1dGr1c8CrMLDpV6mPbImSI?si"
  },
  {
    "title": "The Man",
    "url": "3RauEVgRgj1IuWdJ9fDs70?si"
  },
  {
    "title": "The Archer",
    "url": "3pHkh7d0lzM2AldUtz2x37?si"
  },
  {
    "title": "I Think He Knows",
    "url": "2YWtcWi3a83pdEg3Gif4Pd?si"
  },
  {
    "title": "Miss Americana & The Heartbreak Prince",
    "url": "214nt20w5wOxJnY462klLw?si"
  },
  {
    "title": "Paper Rings",
    "url": "4y5bvROuBDPr5fuwXbIBZR?si"
  },
  {
    "title": "Cornelia Street",
    "url": "12M5uqx0ZuwkpLp5rJim1a?si"
  },
  {
    "title": "Death By A Thousand Cuts",
    "url": "2dgFqt3w9xIQRjhPtwNk3D?si"
  },
  {
    "title": "London Boy",
    "url": "1LLXZFeAHK9R4xUramtUKw?si"
  },
  {
    "title": "Soon You’ll Get Better (feat. The Chicks)",
    "url": "4AYtqFyFbX0Xkc2wtcygTr?si"
  },
  {
    "title": "False God",
    "url": "5hQSXkFgbxjZo9uCwd11so?si"
  },
  {
    "title": "You Need To Calm Down",
    "url": "6RRNNciQGZEXnqk8SQ9yv5?si"
  },
  {
    "title": "Afterglow",
    "url": "1SymEzIT3H8UZfibCs3TYi?si"
  },
  {
    "title": "ME! (feat. Brendon Urie of Panic! At The Disco)",
    "url": "2Rk4JlNc2TPmZe2af99d45?si"
  },
  {
    "title": "It’s Nice To Have A Friend",
    "url": "1SmiQ65iSAbPto6gPFlBYm?si"
  },
  {
    "title": "Daylight",
    "url": "1fzAuUVbzlhZ1lJAx9PtY6?si"
  },
  {
    "title": "Lover - First Dance Remix",
    "url": "2msvOEbkK50foYf9BMXr2X?si"
  },
  {
    "title": "You Need To Calm Down - Clean Bandit Remix",
    "url": "7Bjf96uNizpvXLvNyOJpst?si"
  },
  {
    "title": "ME! - Live From Paris",
    "url": "5fOV54t6mMYv3H9CsnvU81?si"
  },
  {
    "title": "The Archer - Live From Paris",
    "url": "2fgiBCtbWo8pijF6M7pN1i?si"
  },
  {
    "title": "Death By A Thousand Cuts - Live From Paris",
    "url": "3oF7Or7T35yhQbGxbCGvRX?si"
  },
  {
    "title": "Cornelia Street - Live From Paris",
    "url": "3fGnrtrtL1IHSX9t4DKOYf?si"
  },
  {
    "title": "The Man - Live From Paris",
    "url": "7FKbTRXXIWVFQmPH8zGfU0?si"
  },
  {
    "title": "Daylight - Live From Paris",
    "url": "7ryS0xBZNYjQqql34GCkDp?si"
  },
  {
    "title": "You Need To Calm Down - Live From Paris",
    "url": "36a08nLG1xazGaaVKK0vv7?si"
  },
  {
    "title": "Lover - Live From Paris",
    "url": "4lD3RXyvHpJsM3BhIEC4aA?si"
  },
  {
    "title": "Only The Young - Featured in Miss Americana",
    "url": "2slqvGLwzZZYsT4K4Y1GBC?si"
  },
  {
    "title": "Lover (Remix) [feat. Shawn Mendes]",
    "url": "3i9UVldZOE0aD0JnyfAZZ0?si"
  },
  {
    "title": "Beautiful Ghosts - From The Motion Picture Soundtrack \"Cats\"",
    "url": "2evEoQAhIMaa9PfjTT5skG?si"
  },
  {
    "title": "Christmas Tree Farm",
    "url": "2mvabkN1i2gLnGAPUVdwek?si"
  },
  {
    "title": "...Ready For It?",
    "url": "2yLa0QULdQr0qAIvVwN6B5?si"
  },
  {
    "title": "Blank Space",
    "url": "1u8c2t2Cy7UBoG4ArRcF5g?si"
  },
  {
    "title": "Bad Blood",
    "url": "6xsEAm6w9oMQYYg3jkEkMT?si"
  },
  {
    "title": "Shake It Off",
    "url": "0cqRj7pUJDkTCEsJkx8snD?si"
  },
  {
    "title": "You Belong With Me",
    "url": "1GEBsLDvJGw7kviySRI6GX?si"
  },
  {
    "title": "Mean",
    "url": "6yM6QsnTCTVOkKEvg3hGlo?si"
  },
  {
    "title": "End Game",
    "url": "2x0WlnmfG39ZuDmstl9xfX?si"
  },
  {
    "title": "The Story Of Us",
    "url": "2jt90bYlYDg1lXYWES34LJ?si"
  },
  {
    "title": "Style",
    "url": "0ug5NqcwcFR2xrfTkc7k8e?si"
  },
  {
    "title": "Speak Now",
    "url": "2PBghI9zJkQEWBzMSMo2Ki?si"
  },
  {
    "title": "Out Of The Woods",
    "url": "0qUnBLZ8bJqUNEeQgayL9t?si"
  },
  {
    "title": "Wildest Dreams",
    "url": "3fVnlF4pGqWI9flVENcT28?si"
  },
  {
    "title": "Love Story",
    "url": "1D4PL9B8gOg78jiHg3FvBb?si"
  },
  {
    "title": "I Don’t Wanna Live Forever (Fifty Shades Darker)",
    "url": "2y5aJvzXhHPA94U5GFAcXe?si"
  },
  {
    "title": "Picture To Burn",
    "url": "1nuk1yTZO3zR8XB8Ofk9q3?si"
  },
  {
    "title": "Ours",
    "url": "0hK93KD6Y0j9giUGh4Valj?si"
  },
  {
    "title": "White Horse",
    "url": "4QhjEJ2o6QNwpZGs51AmiY?si"
  },
  {
    "title": "Look What You Made Me Do",
    "url": "1P17dC1amhFzptugyAO7Il?si"
  },
  {
    "title": "Mine",
    "url": "67Io3gxHwfbUreBf114c0u?si"
  },
  {
    "title": "Delicate",
    "url": "6NFyWDv5CjfwuzoCkw47Xf?si"
  },
  {
    "title": "Our Song",
    "url": "43H3q2NWT9LCuYS1B5IUvV?si"
  },
  {
    "title": "Fearless",
    "url": "15PRxID4aGtOncbffzgZXI?si"
  },
  {
    "title": "Sparks Fly",
    "url": "09cM9BjyNFizKUOXh6j9rT?si"
  },
  {
    "title": "Should've Said No",
    "url": "6CdaXOq1MWe2JHDalTG01d?si"
  },
  {
    "title": "Fifteen",
    "url": "6aQrB8kaWyaCj9RYB7Rh5L?si"
  },
  {
    "title": "Getaway Car",
    "url": "0VE4kBnHJUgtMf0dy6DRmW?si"
  },
  {
    "title": "Today Was A Fairytale - US Version",
    "url": "4pFvEWbjBpPUdYRQly0THs?si"
  },
  {
    "title": "Back To December",
    "url": "0tr6XR58KBdDYd8qvHVTs8?si"
  },
  {
    "title": "Safe & Sound - from The Hunger Games Soundtrack",
    "url": "4yTqjWF2EoFJM5BbSCe4YW?si"
  },
  {
    "title": "Tim McGraw",
    "url": "7DQmwd7zye9xvzMQJnD8S8?si"
  },
  {
    "title": "Gorgeous",
    "url": "1ZY1PqizIl78geGM4xWlEA?si"
  },
  {
    "title": "I Did Something Bad",
    "url": "4svZDCRz4cJoneBpjpx8DJ?si"
  },
  {
    "title": "Don’t Blame Me",
    "url": "1R0a2iXumgCiFb7HEZ7gUE?si"
  },
  {
    "title": "So It Goes...",
    "url": "5PxFv9yJEg9dxvbZggykro?si"
  },
  {
    "title": "King Of My Heart",
    "url": "7HuBDWi18s4aJM8UFnNheH?si"
  },
  {
    "title": "Dancing With Our Hands Tied",
    "url": "7I7JbDv63ZJJsSi24DyJrz?si"
  },
  {
    "title": "Dress",
    "url": "6oVxXO5oQ4pTpO8RSnkzvv?si"
  },
  {
    "title": "This Is Why We Can't Have Nice Things",
    "url": "07NxDD1iKCHbAldceD7QLP?si"
  },
  {
    "title": "Call It What You Want",
    "url": "1GwMQaZz6Au3QLDbjbMdme?si"
  },
  {
    "title": "New Year’s Day",
    "url": "7F5oktn5YOsR9eR5YsFtqb?si"
  },
  {
    "title": "Welcome To New York",
    "url": "10nqz67NQWWa7XPq7ycihi?si"
  },
  {
    "title": "All You Had To Do Was Stay",
    "url": "4NNolUeL5m2ju7kf8pdg6H?si"
  },
  {
    "title": "I Wish You Would",
    "url": "5gRYrtvyVyaCRvLt56OfuV?si"
  },
  {
    "title": "Bad Blood",
    "url": "0TvQLMecTE8utzoNmvXRbK?si"
  },
  {
    "title": "How You Get The Girl",
    "url": "0fM9dEhUFV4MHDuJgrcfOv?si"
  },
  {
    "title": "This Love",
    "url": "4L560fic5PaTuCFm6CviKa?si"
  },
  {
    "title": "I Know Places",
    "url": "6EwNJz8CuVsrsLvXprJ20Q?si"
  },
  {
    "title": "Clean",
    "url": "1NmVZsG18CzCAtw7rnV3yA?si"
  },
  {
    "title": "Wonderland",
    "url": "6RvRzl1YJTDnUvdOtV21IK?si"
  },
  {
    "title": "You Are In Love",
    "url": "2KrOAg6FftbjgSKdd2a4rS?si"
  },
  {
    "title": "New Romantics",
    "url": "0qAIiGFKLdV1xpNlEhjpq8?si"
  },
  {
    "title": "Dear John",
    "url": "1GeLxMgpeCnMJntwyW6rLw?si"
  },
  {
    "title": "Never Grow Up",
    "url": "57w0Uyk2jJAkO2hMJ36xJZ?si"
  },
  {
    "title": "Enchanted",
    "url": "3sqrvkNC6IPTIXvvbx9Arw?si"
  },
  {
    "title": "Better Than Revenge",
    "url": "55mh9j2aB7xZ1Oh463gK8k?si"
  },
  {
    "title": "Innocent",
    "url": "4LraIz87diVQdDK0rhi0S4?si"
  },
  {
    "title": "Haunted",
    "url": "72idZxdEHLbi2YI486c3sE?si"
  },
  {
    "title": "Last Kiss",
    "url": "1VCJ7vk3Y2DoJIAEOXe3V8?si"
  },
  {
    "title": "Long Live",
    "url": "7BFc7ffruhZ4Hecnqf5xju?si"
  },
  {
    "title": "If This Was A Movie",
    "url": "5tSmAABuoOfR59lrtXdDqm?si"
  },
  {
    "title": "Superman",
    "url": "6aJ0ipi4EPmu1aTbFeXZnw?si"
  },
  {
    "title": "Back To December - Acoustic",
    "url": "7k7BOXE4u6luKTwcLEAyrd?si"
  },
  {
    "title": "Haunted - Acoustic Version",
    "url": "6SdBf0ZsJZoKaH5zcDaz9X?si"
  },
  {
    "title": "Mine - POP Mix",
    "url": "0OAHsZ8vrS2NKom3cvfJQD?si"
  },
  {
    "title": "Jump Then Fall",
    "url": "6WWvcA62QlnRguluWAk6bv?si"
  },
  {
    "title": "Untouchable",
    "url": "6ovFJkdau79DuXEvQjPaNH?si"
  },
  {
    "title": "Forever & Always - Piano Version",
    "url": "13MAWVUSkbGMUi6I7RowRK?si"
  },
  {
    "title": "Come In With The Rain",
    "url": "0cEG04R5cldkTLzK6phlcn?si"
  },
  {
    "title": "SuperStar",
    "url": "0XfTh16YcKPzdxMPTeKTAq?si"
  },
  {
    "title": "The Other Side Of The Door",
    "url": "1yDJcXc549N6AabNBzFAku?si"
  },
  {
    "title": "Hey Stephen",
    "url": "3CI1f4yLwdHzcUnH7o0Xyh?si"
  },
  {
    "title": "Breathe",
    "url": "2dzk2z7MXl0peRhBUsDq4d?si"
  },
  {
    "title": "Tell Me Why",
    "url": "4x7Gxk2GfwZJcqpoVT1PbR?si"
  },
  {
    "title": "You're Not Sorry",
    "url": "3JhvYnOfKLJuWC7jEU0GmJ?si"
  },
  {
    "title": "The Way I Loved You",
    "url": "4pEZUytwBzha5Un6m3SCFf?si"
  },
  {
    "title": "Forever & Always",
    "url": "3NKCWBT2uKp8rxSkcvIrdX?si"
  },
  {
    "title": "The Best Day",
    "url": "0ck1qErO76fM9xKxuSeqDk?si"
  },
  {
    "title": "Change",
    "url": "3gFaNwyiafgUoQhR0pHYA9?si"
  },
  {
    "title": "A Place in this World",
    "url": "1oR4MUBpyNrAViC8wPNpfm?si"
  },
  {
    "title": "Cold As You",
    "url": "569sXXQ7t0jSdqHooi2yqs?si"
  },
  {
    "title": "The Outside",
    "url": "5Tj2MqcFMf60CaGsKbM1aq?si"
  },
  {
    "title": "Tied Together with a Smile",
    "url": "2zzxwmoOBnXDT0KnJsoIWk?si"
  },
  {
    "title": "Stay Beautiful",
    "url": "41sjzdjScVwnxnxADElts6?si"
  },
  {
    "title": "Mary's Song (Oh My My My)",
    "url": "2O8sogKJCfVZ4rotBv1vVF?si"
  },
  {
    "title": "I'm Only Me When I'm With You",
    "url": "7CzxXgQXurKZCyHz9ufbo1?si"
  },
  {
    "title": "Invisible",
    "url": "1k3PzDNjg38cWqOvL4M9vq?si"
  },
  {
    "title": "A Perfectly Good Heart",
    "url": "0YgHuReCSPwTXYny7isLja?si"
  },
  {
    "title": "Teardrops on My Guitar - Pop Version",
    "url": "1hxLyjC9D9Jpw6EAPKqWv4?si"
  },
  {
    "title": "Teardrops On My Guitar - Radio Single Remix",
    "url": "2TF4UtYreqNbQ6Z9AccldU?si"
  },
  {
    "title": "Ronan",
    "url": "0Nw8hv79MLJa1yjtsEgz08?si"
  },
  {
    "title": "Delicate - Recorded at The Tracking Room Nashville",
    "url": "1Fj0T1XKuhRu7EZzJ7NJIK?si"
  },
  {
    "title": "September - Recorded at The Tracking Room Nashville",
    "url": "5eGX87IiKsGuzS3iw4CfCX?si"
  },
  {
    "title": "Sweeter Than Fiction - From \"One Chance\" Soundtrack",
    "url": "0RFCHlNuTeUHIB36VuVbOL?si"
  },
  {
    "title": "Eyes Open",
    "url": "6KEemo78n0RnCQWKkeOdXz?si"
  },
  {
    "title": "Back To December/Apologize/You're Not Sorry - Live/2011/Medley",
    "url": "1IsquhJFJ0qcFZI7FeAEuN?si"
  },
  {
    "title": "Bette Davis Eyes - Live/2011",
    "url": "6KF9xd2hBLuexrmBX4vUWD?si"
  },
  {
    "title": "I Want You Back - Live/2011",
    "url": "4KB3zBArZ1rHRExilzycaV?si"
  },
  {
    "title": "Ours - Live/2011",
    "url": "68QyrSzpnoU04AAhE5z8lj?si"
  },
  {
    "title": "Last Kiss - Live/2011",
    "url": "6hH37tyeRdyan1mAppmVor?si"
  },
  {
    "title": "Haunted - Live/2011",
    "url": "6znB7YZhMJT2B83zfbiyLq?si"
  },
  {
    "title": "Long Live - Live/2011",
    "url": "5QkzyLUb4ggojNDp8G2OxX?si"
  },
  {
    "title": "Sparks Fly - Live/2011",
    "url": "1aBJNc2thaKyh5THWzIqHX?si"
  },
  {
    "title": "Mine - Live/2011",
    "url": "7yndkPYP6YQQLBpPsizDfh?si"
  },
  {
    "title": "The Story Of Us - Live",
    "url": "72GIZuUXo14oyrS0si3Rgc?si"
  },
  {
    "title": "Dear John - Live/2011",
    "url": "4DbI1rr4IQ2bc8nejy9ttd?si"
  },
  {
    "title": "Mean - Live/2011",
    "url": "7mFiEij8AXPUZB7aKLbUlQ?si"
  },
  {
    "title": "Better Than Revenge - Live/2011",
    "url": "6505MLhnqTDDg4tjoUz2Wp?si"
  },
  {
    "title": "Enchanted - Live/2011",
    "url": "3lm4L3pPL32PFy74dR17OR?si"
  },
  {
    "title": "Speak Now - Live/2011",
    "url": "3QFB14MOUf3imlyISNmrbT?si"
  },
  {
    "title": "Drops Of Jupiter - Live/2011",
    "url": "0BSmbCIY36iw04azzJ3S0S?si"
  },
  {
    "title": "Delicate - Seeb Remix",
    "url": "2Sy2oGjP5RYB4cLVoDU0Gz?si"
  },
  {
    "title": "...Ready For It? - BloodPop® Remix",
    "url": "1Ygm9KdH3wbzDekO8JgxcW?si"
  },
  {
    "title": "Delicate - Sawyr And Ryan Tedder Mix",
    "url": "6SYwJcqaltK2WFRmD1unUV?si"
  },
  {
    "title": "Babe",
    "url": "7fRruZ12gXGwBs0zXQ6e5V?si"
  },
  {
    "title": "Big Star (with Taylor Swift) - Live",
    "url": "7JKwboSAWRHJI5U1XGTqS3?si"
  },
  {
    "title": "Highway Don't Care",
    "url": "60hGQrn24APqEFSLObLeDc?si"
  },
  {
    "title": "Both of Us (feat. Taylor Swift)",
    "url": "0IOCGDGD0qfw7ViWrWYxtw?si"
  },
  {
    "title": "Two Is Better Than One (feat. Taylor Swift)",
    "url": "1MaqkdFNIKPdpQGDzme5ss?si"
  },
  {
    "title": "Crazier",
    "url": "5vyxXfD5gLlyPxGZMEjtmd?si"
  },
  {
    "title": "Should've Said No - The 3D Concert Experience",
    "url": "06FXaDDdg0BzXl15cthMS5?si"
  },
  {
    "title": "Last Christmas",
    "url": "2IprIjGNRlj3TfqUWCAo0C?si"
  },
  {
    "title": "Christmases When You Were Mine",
    "url": "1g09DZjQ7yBommCT6POY2n?si"
  },
  {
    "title": "Santa Baby",
    "url": "71IScwIe7bcIlpnlkbKVQw?si"
  },
  {
    "title": "Silent Night",
    "url": "1cJkUN5LAotktryx2nPCr7?si"
  },
  {
    "title": "Christmas Must Be Something More",
    "url": "31JVjy3XWnh6C2zf4kLCXN?si"
  },
  {
    "title": "White Christmas",
    "url": "7GZ3KDorsc1yWndEtzGTjf?si"
  },
  {
    "title": "Carolina - \"Where The Crawdads Sing\" - Video Edition",
    "url": "12xIjI9A9UlB6zEc7kyZ06?si"
  }
];


// Function to get a random song
function getRandomSong() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    return songs[randomIndex];
}

// Function to get a song for a given day
function getSongOfTheDay() {
    const date = new Date(); // Get the current date
    const dayOfYear = Math.floor(
        (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - 
         Date.UTC(date.getFullYear(), 0, 0)) / 86400000
    ); // Calculate the day of the year (1-365)
    const songIndex = dayOfYear % songs.length; // Use modulo to cycle through the song list
    return songs[songIndex];
}

// Get a random song
//const song = getRandomSong();
const song = getSongOfTheDay();

const song_url = "https://open.spotify.com/embed/track/".concat(song.url).concat("?utm_source=generator");

// Set the song title and iframe src
document.getElementById('song').innerText = song.title;
document.getElementById('spotify-player').src = song_url;

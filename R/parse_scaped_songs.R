library(jsonlite)

page1 = read_json("songs_scraped/songs_1-100.json")


scrape_file = function(filePath) {

  page1 = read_json(filePath)
  
  songList = data.frame("title" = character(),
                        "url" = character())
  
  for(song in page1$items) {
    
    songList = rbind(songList, data.frame("title" = song$track$name,
                                          "url" = paste0(song$track$id,"?si")))  
    
  }

  return(songList)
}

files = list.files("songs_scraped/")

songList = data.frame("title" = character(),
                      "url" = character())

for(file in files) {
  songList = rbind(songList, scrape_file(paste0("songs_scraped/", file)))
}

write_json(songList, "songs.json", pretty = T)

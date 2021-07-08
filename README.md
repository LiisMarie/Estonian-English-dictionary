# Estonian-English dictionary

### Web application for an Estonian-English dictionary.

User can add, modify and delete Estonian/English words and their equivalents. One word can have several equivalents.

User can search dictionary entries, finds exact and fuzzy matches.

Application uses **Javascript** and **Java**. For UI layer **React** has been used and for API layer **Spring-boot**.
<br/><br/>
## Local setup guide

Clone the repository
<br/><br/>
### Starting API layer
Navigate to src/main/java/com.likutt.dictionary and run **DictionaryApplication.java** from there.
<br/><br/>
### Starting UI layer

Open terminal and navigate to UI project directory.
#### `cd src/main/webapp/client`

Before running the application for first time.
#### `npm install`

Running the application
#### `npm start`
<br/><br/>
## Screenshots

Search 'banana' (English -> Estonian) |
------------ |
<img src="screenshots/search_banana.jpg"> |

Search 'koo' with fuzzy enabled (Estonian -> English) |
------------ |
<img src="screenshots/search_koo_fuzzy.jpg"> |

Entry list |
------------ |
<img src="screenshots/entry_list.jpg"> |

Add new entry |
------------ |
<img src="screenshots/new_entry.jpg"> |

# csv-to-nokotime - Experimental

## Paste Jira exported CSV into Nokotime
Imports time into Nokotime from a Jira exported CSV, assuming all the logged time is for the same client.

### Instructions
- Open your CSV file with LibreOffice.
- Copy values from CSV file (do not include headers). See `data-example.txt` on this repo.
- Visit Nokotime and login.
- Open the console and run `main.js`.
- Paste the values in the task description.
- Select a client.
- Click `LOG IT`.

### Regarding the data
This should be the order of columns.
- Ticket ID
- Date
- Time
- Description

### Issues
If for any reason, logging stops, just click "LOG IT" again. If that doesn't work... \o/
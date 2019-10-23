class Recording {
    constructor(){
        this.id = Recording.incrementId()
        this.notes = []
    }
    static getLastRecordingId(){
        fetch(RECORDINGS_URL)
        .then(res => res.json())
        .then(recordings => this.latestId = recordings[-1].id)
    }
    static incrementId() {
        if (!this.latestId) getLastRecordingId()
        this.latestId++
        return this.latestId
      }
}

function postRecording(recording){

    const fetchObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({id: recording.id})
    }

    fetch(RECORDINGS_URL, fetchObj)
}

function deleteRecording(){
    return fetch(RECORDING_URL(currentLoop.id))
}

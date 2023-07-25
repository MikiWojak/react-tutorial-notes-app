import React from "react"

export default function Sidebar(props) {
    const noteElements = props.notes.map((note, index) => {
        const lines = JSON.stringify(note.body).split('\\n')
        const [rawTitle] = lines
        const title = rawTitle.replace(/[^a-zA-Z0-9 ]/g, '').trim()

        return (
            <div key={note.id}>
                <div
                    className={`title ${
                        note.id === props.currentNote.id ? "selected-note" : ""
                    }`}
                    onClick={() => props.setCurrentNoteId(note.id)}
                >
                    <h4 className="text-snippet">{title}</h4>
                </div>
            </div>
    )})

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}

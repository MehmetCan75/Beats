import React from 'react';
import Piano from '../../lib';
import './InteractivePiano.css';

function PianoContainer({ children }) {
  return (
    <div
      className={'interactive-piano__piano-container'}
      onMouseDown={event => event.preventDefault()}
    >
      {children}
    </div>
  );
}

function AccidentalKey({ isPlaying, text, eventHandlers }) {
  return (
    <div className={'interactive-piano__accidental-key__wrapper'}>
      <button
        className={`interactive-piano__accidental-key ${
          isPlaying ? 'interactive-piano__accidental-key--playing' : ''
        }`}
        {...eventHandlers}
      >
        <div className={'interactive-piano__text'}>{text}</div>
      </button>
    </div>
  );
}

function NaturalKey({ isPlaying, text, eventHandlers }) {
  return (
    <button
      className={`interactive-piano__natural-key ${
        isPlaying ? 'interactive-piano__natural-key--playing' : ''
      }`}
      {...eventHandlers}
    >
      <div className={'interactive-piano__text'}>{text}</div>
    </button>
  );
}

function PianoKey({
  isNoteAccidental,
  isNotePlaying,
  startPlayingNote,
  stopPlayingNote,
  keyboardShortcuts,
}) {
  function handleMouseEnter(event) {
    if (event.buttons) {
      startPlayingNote();
    }
  }

  const KeyComponent = isNoteAccidental ? AccidentalKey : NaturalKey;
  const eventHandlers = {
    onMouseDown: startPlayingNote,
    onMouseEnter: handleMouseEnter,
    onTouchStart: startPlayingNote,
    onMouseUp: stopPlayingNote,
    onMouseOut: stopPlayingNote,
    onTouchEnd: stopPlayingNote,
  };
  return (
    <KeyComponent
      isPlaying={isNotePlaying}
      text={keyboardShortcuts.join(' / ')}
      eventHandlers={eventHandlers}
    />
  );
}

export default function InteractivePiano() {
  return (
    <PianoContainer>
      <Piano
        startNote={'C4'}
        endNote={'B5'}
        renderPianoKey={PianoKey}
        keyboardMap={{
          A: 'C4',
          2: 'C#4',
          Z: 'D4',
          3: 'D#4',
          E: 'E4',
          R: 'F4',
          4: 'F#4',
          T: 'G4',
          5: 'G#4',
          Y: 'A4',
          6: 'A#4',
          U: 'B4',
          I: 'C5',
          7: 'C#5',
          O: 'D5',
          8: 'D#5',
          P: 'E5',
          W: 'F5',
          9: 'F#5',
          ',': 'G5',
          0: 'G#5',
          '.': 'A5',
          '°': 'A#5',
          '/': 'B5',
        }}
      />
    </PianoContainer>
  );
}

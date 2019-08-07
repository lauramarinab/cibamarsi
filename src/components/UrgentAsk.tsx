import * as React from 'react'
import Windows from './Windows/Windows'
import { Dida } from '../UI/Typography'
import { ButtonWindows } from './Windows/styles'
import { colors } from '../styles/variables'
import { piccolissimoLibroDelleRisposte } from '../utils/risposte'
import { randomNumber } from '../utils/randomNumber'

interface State {
  openAlertA: boolean
  openAlertB: boolean
  openAlertC: boolean
  openAskWindow: boolean
  openYesWindow: boolean
  openNoWindow: boolean
}

const UrgentAsk: React.FC = () => {
  const [state, setState] = React.useState<State>({
    openAlertA: false,
    openAlertB: false,
    openAlertC: false,
    openAskWindow: false,
    openYesWindow: false,
    openNoWindow: false
  })

  React.useEffect(() => {
    if (state.openAlertA) {
      setTimeout(() => {
        setState({ ...state, openAlertB: true })
      }, 300)
    }
  }, [state.openAlertA])

  React.useEffect(() => {
    if (state.openAlertB) {
      setTimeout(() => {
        setState({ ...state, openAlertC: true })
      }, 400)
    }
  }, [state.openAlertB])

  const onToggleAskWindow = () => setState(state => ({ ...state, openAskWindow: !state.openAskWindow }))

  const onToggleYesWindow = () => setState(state => ({ ...state, openYesWindow: !state.openYesWindow }))
  const onToggleNoWindow = () => setState(state => ({ ...state, openNoWindow: !state.openNoWindow }))

  return (
    <>
      <Windows
        style={{ gridColumnStart: 4, gridColumnEnd: 6, gridRowStart: 5, gridRowEnd: 6, height: 130, justifySelf: 'center' }}
        onClickClose={() => setState({ ...state, openAlertA: true })}
        onClickAsk={() => onToggleAskWindow()}
        headerLabel="Domanda urgente"
        bodyWindows={
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Dida style={{ marginTop: 5 }}>Ti piace cucinare?</Dida>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '100%', marginTop: 15 }}>
              <ButtonWindows style={{ width: '30%', height: 30 }} onClick={() => onToggleYesWindow()}>
                Si
              </ButtonWindows>
              <ButtonWindows style={{ width: '30%', height: 30 }} onClick={() => onToggleNoWindow()}>
                No
              </ButtonWindows>
            </div>
          </div>
        }
      />
      {state.openYesWindow && (
        <Windows
          style={{ gridColumnStart: 4, gridColumnEnd: 6, gridRowStart: 5, gridRowEnd: 6, top: -50, left: -15, justifySelf: 'center' }}
          onClickClose={() => onToggleYesWindow()}
          headerLabel="Condividi"
          bodyWindows={
            <>
              <Dida style={{ marginBottom: 10 }}>Vuoi condividere con me le tue ricette? Sarei lieta di inserire anche la tua.</Dida>
              <a
                href="mailto:lauramarinabianchi@gmail.com?subject=La mia buonissima ricetta"
                style={{ textDecoration: 'none', margin: '5px 20px' }}
              >
                <ButtonWindows>Scrivimi</ButtonWindows>
              </a>
            </>
          }
        />
      )}
      {state.openNoWindow && (
        <Windows
          style={{ gridColumnStart: 4, gridColumnEnd: 6, gridRowStart: 5, gridRowEnd: 6, top: -50, left: -15, justifySelf: 'center' }}
          onClickClose={() => onToggleNoWindow()}
          headerLabel="Senza titolo"
          bodyWindows={<Dida>Se non ti piace, ma devi comunque sopravvivere, sei nel posto giusto!</Dida>}
        />
      )}
      {state.openAskWindow && (
        <Windows
          style={{ gridColumnStart: 4, gridColumnEnd: 6, gridRowStart: 5, gridRowEnd: 6, top: -50, left: -20, justifySelf: 'center' }}
          onClickClose={() => onToggleAskWindow()}
          headerLabel="Carol Bolt ti risponde:"
          bodyWindows={
            <>
              <Dida>Ti stai chiedendo cosa sia Cibamarsi e perché sei qui?</Dida>
              <Dida>Il piccolissimo libro delle risposte dice:</Dida>
              <Dida style={{ marginTop: 5, color: colors.rgb.magenta }}>
                "{piccolissimoLibroDelleRisposte[randomNumber(piccolissimoLibroDelleRisposte.length - 1, 0)]}"
              </Dida>
            </>
          }
        />
      )}
      {state.openAlertA && (
        <Windows
          style={{
            gridColumnStart: 4,
            gridColumnEnd: 6,
            gridRowStart: 5,
            gridRowEnd: 6,
            top: -30,
            left: -70,
            zIndex: 2,
            justifySelf: 'center'
          }}
          onClickClose={() => setState({ ...state, openAlertA: false })}
          headerLabel="Warning"
          bodyWindows={
            <>
              <Dida>Insomma, si o no?</Dida>
              <Dida>Chiudi e rispondi!</Dida>
            </>
          }
        />
      )}
      {state.openAlertB && (
        <Windows
          style={{
            gridColumnStart: 4,
            gridColumnEnd: 6,
            gridRowStart: 5,
            gridRowEnd: 6,
            top: -40,
            left: -30,
            zIndex: 2,
            justifySelf: 'center'
          }}
          onClickClose={() => setState({ ...state, openAlertB: false })}
          headerLabel="Warning"
          bodyWindows={<Dida>Devi rispondere alla domanda per ottenere delle risposte</Dida>}
        />
      )}
      {state.openAlertC && (
        <Windows
          style={{
            gridColumnStart: 4,
            gridColumnEnd: 6,
            gridRowStart: 5,
            gridRowEnd: 6,
            top: -1,
            left: -54,
            zIndex: 2,
            justifySelf: 'center'
          }}
          onClickClose={() => setState({ ...state, openAlertC: false })}
          headerLabel="Warning"
          bodyWindows={<Dida>Non credo tu possa chiudere veramente questa finestra</Dida>}
        />
      )}
      {(state.openAlertA || state.openAlertB || state.openAlertC) && (
        <div style={{ width: '100vw', height: '100vh', position: 'absolute', zIndex: 1 }}></div>
      )}
    </>
  )
}

export default UrgentAsk

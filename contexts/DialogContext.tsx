'use client'

import { createContext, ReactNode, useReducer } from 'react'

const initialDialogs = {
  open: false,
  target: 0,
  nDialogs: 3,
  dialogMap: { Menu: 0, singleButton: 1, noButton: 2, FormError: 3 },
  dialogs: [
    {
      buttons: [
        {
          name: '채용',
          callback: () => (location.href = '/wdlist'),
        },
        {
          name: '커리어',
          callback: () => (location.href = '/wdlist'),
        },
        {
          name: '소셜',
          callback: () => (location.href = '/wdlist'),
        },
        {
          name: '이력서',
          callback: () => (location.href = '/wdlist'),
        },
        {
          name: '프리랜서',
          callback: () => (location.href = '/wdlist'),
        },
      ],
    },
    {
      title: 'no Callbacks',
      description: 'with no Cancel',
      buttons: [
        {
          name: 'Confirm',
          callback: () => {},
        },
      ],
    },
    {
      title: 'no Button',
      description: 'description',
      buttons: [],
    },
    {
      title: 'Error',
      description: '당신의 성씨를 기입해주세요',
      buttons: [
        {
          name: 'Confirm',
          callback: () => {},
        },
      ],
    },
  ],
}

function dialogReducer(state: any, action: any) {
  switch (action.type) {
    case 'on':
      return { ...state, open: true }

    case 'off':
      return { ...state, open: false }

    case 'setTarget':
      return { ...state, target: action.target }

    case 'edit': {
      let dialogName = state.dialogMap[action.dialogName]

      // override a dialog if already existed
      if (dialogName !== undefined) {
        const dialogs = [...state.dialogs]
        dialogs[dialogName] = action.dialog

        return {
          ...state,
          dialogs: dialogs,
        }
      }

      // add a custom dialog
      else {
        dialogName = action.dialogName !== undefined ? action.dialogName : 'dialog' + state.nDialogs
        state.dialogMap[dialogName] = state.nDialogs

        return {
          ...state,
          nDialogs: state.nDialogs + 1,
          dialogs: [...state.dialogs, action.dialog],
        }
      }
    }

    // case 'remove':{
    //     // figure out dialogName
    //     let dialogName = state.dialogMap[action.dialogName]
    //
    //     if (dialogName === undefined){
    //         dialogName = state.dialogMap[`dialog${action.target}`]
    //     }
    //     if (dialogName === undefined) break;
    //     else {
    //
    //         console.log(dialogName)
    //         const dMap = state.dialogMap
    //         delete dMap.dialogMap[dialogName];
    //
    //         const effect = state.nDialogs -1
    //
    //         return ({
    //             ...state,
    //             dialogMap: dMap,
    //             target: state.target === effect -1 ? effect - 1 : state.target,
    //             nDialogs: effect
    //         })
    //     }
    // }

    default: {
      throw Error('Unknown action: ' + action)
    }
  }
}

export const DialogContext = createContext(initialDialogs)
export const DialogDispatchContext = createContext<any>(undefined)

export default function DialogProvider({ children }: { children: ReactNode }) {
  const [dialog, dispatch] = useReducer(dialogReducer, initialDialogs)
  return (
    <DialogContext.Provider value={dialog}>
      <DialogDispatchContext.Provider value={dispatch}>{children}</DialogDispatchContext.Provider>
    </DialogContext.Provider>
  )
}

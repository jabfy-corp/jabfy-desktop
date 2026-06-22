import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
  // Add IPC methods here when connecting to jabfy-core
  // Example:
  // sendAction: (action: any) => ipcRenderer.invoke('send-action', action),
  // onActionResponse: (callback: (response: any) => void) => {
  //   ipcRenderer.on('action-response', (_event, response) => callback(response))
  // }
})

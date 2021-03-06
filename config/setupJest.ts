import '@testing-library/jest-dom'

const globalAny: any = global
globalAny.File = class MockFile {
  filename: string
  type: string | undefined

  constructor(parts: (string | Blob | ArrayBuffer | ArrayBufferView)[], filename: string, properties ?: FilePropertyBag) {
    this.filename = filename
    this.type = properties?.type
  }
}

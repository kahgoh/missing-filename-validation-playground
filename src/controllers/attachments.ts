import {Fields, Files, IncomingForm} from 'formidable'
import {Request, Response} from 'express'
import * as fs from 'fs'

const attachments : string[] = []

export function index(request : Request, response : Response) : void {
  response.render('index', {
    attachments: attachments
  })
}

export function post(request : Request, response : Response) : void {
  let form : IncomingForm = new IncomingForm()
  form.parse(request, (_err : any, _fields : Fields, files : Files) => {
    attachments.push(files.attachment.name)
    fs.unlink(files.attachment.path, (err) => {
      if (err) {
        console.error(err)
      }
    })
    response.render('index', {
      attachments: attachments
    })
  })
}

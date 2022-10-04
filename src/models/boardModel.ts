export interface serverResponse extends Board {
  publisher?: string
}


export interface Board{
  _id: string
  name: string
  des: string
  date: string
  tasks: Tasks
}

export interface Tasks {

  todo: Job[]
  progress: Job[]
  done: Job[]

}

export interface Job {
  id: number
  name: string
}

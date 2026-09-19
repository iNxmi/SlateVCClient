// Generouted, changes to this file will be overridden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/authentication/login`
  | `/server/:id_server`
  | `/server/:id_server/text-channel/:id_channel`
  | `/server/:id_server/voice-channel/:id_channel`

export type Params = {
  '/server/:id_server': { id_server: string }
  '/server/:id_server/text-channel/:id_channel': { id_server: string; id_channel: string }
  '/server/:id_server/voice-channel/:id_channel': { id_server: string; id_channel: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()

import type { FastifyReply, FastifyRequest } from 'fastify'

export async function checkSessionIdExists(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const sessionId = request.cookies.sessionId

  if (!sessionId) {
    // code 401: não autorizado
    return reply.status(401).send({
      error: 'Unauthorized',
    })
  }
}
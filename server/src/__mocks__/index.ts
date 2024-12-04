import { Request, Response } from "express";

export const createMockRequest = (
  query = {},
  params = {},
  body = {}
): Partial<Request> => ({ query, params, body });

export const createMockResponse = (): Partial<Response> => {
  const res: Partial<Response> = {};
  res.status = jest.fn().mockReturnThis(); // Makes status chainable
  res.json = jest.fn();
  res.send = jest.fn();
  return res;
};

import { Request, Response } from "express";

export const mockRequest = {} as Request;

export const mockResponse = () => {
  const res = {} as Partial<Response>;
  res.status = jest.fn().mockReturnValue(res); // Make status chainable
  res.json = jest.fn().mockReturnValue(res); // Mock json method
  res.send = jest.fn().mockReturnValue(res); // Mock send method if needed
  return res as Response;
};

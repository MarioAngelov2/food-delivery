import { Request, Response } from "express";
import {
  getProduct,
} from "../../../controllers/adminController";
import {
  getProductService,
} from "../../../services/adminService";
import {
  createMockRequest,
  createMockResponse,
} from "../../../__mocks__/index";

// Mock the service
jest.mock("../../../services/adminService", () => ({
  getAllProductsService: jest.fn(),
  getProductService: jest.fn(),
}));

describe("getProduct Controller", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    // Initialize req and res objects for each test
    req = createMockRequest({}, { id: "5" });
    res = createMockResponse();
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  it("should respond with product details for a valid ID", async () => {
    const serviceResponse = {
      result: { id: 5, name: "Product 1" },
    };

    (getProductService as jest.Mock).mockResolvedValue(serviceResponse);

    await getProduct(req as Request, res as Response);

    expect(getProductService).toHaveBeenCalledWith("5"); // Check if service called correctly
    expect(res.status).toHaveBeenCalledWith(200); // Check if status 200 returned
    expect(res.json).toHaveBeenCalledWith(serviceResponse); // Check if response JSON is correct
  });

  it("should handle edge case for smallest valid ID", async () => {
    req.params = { id: "1" };
    const serviceResponse = {
      result: { id: 1, name: "Product 1" },
    };

    (getProductService as jest.Mock).mockResolvedValue(serviceResponse);

    await getProduct(req as Request, res as Response);

    expect(getProductService).toHaveBeenCalledWith("1");
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(serviceResponse);
  });

  it("should handle edge case for largest valid ID", async () => {
    const largeId = String(Number.MAX_SAFE_INTEGER);
    req.params = { id: largeId };
    const serviceResponse = {
      result: { id: Number.MAX_SAFE_INTEGER, name: "Product Max" },
    };

    (getProductService as jest.Mock).mockResolvedValue(serviceResponse);

    await getProduct(req as Request, res as Response);

    expect(getProductService).toHaveBeenCalledWith(largeId);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(serviceResponse);
  });
});
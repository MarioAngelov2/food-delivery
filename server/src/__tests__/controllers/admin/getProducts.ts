import { Request, Response } from "express";
import {
  getAllProducts,
  getProduct,
} from "../../../controllers/adminController";
import {
  getAllProductsService,
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

describe("getAllProducts Controller", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    // Initialize req and res objects for each test
    req = createMockRequest();
    res = createMockResponse();
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  it("should respond with a list of products for valid limit and page", async () => {
    req.query = { limit: "5", page: "2" };

    // Mock the service response
    const serviceResponse = {
      result: [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
        { id: 3, name: "Product 3" },
      ],
    };
    (getAllProductsService as jest.Mock).mockResolvedValue(serviceResponse);

    await getAllProducts(req as Request, res as Response);

    expect(getAllProductsService).toHaveBeenCalledWith(5, 2); // Check if service called correctly
    expect(res.status).toHaveBeenCalledWith(200); // Check if status 200 returned
    expect(res.json).toHaveBeenCalledWith(serviceResponse); // Check if response JSON is correct
  });

  it("should return 400 if page or limit is invalid", async () => {
    req.query = { limit: "invalid", page: "1" };

    await getAllProducts(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(400); // Check if 400 status returned
    expect(res.json).toHaveBeenCalledWith({
      message: "Invalid page or limit values",
    });
  });

  it("should return 500 if service throws an error", async () => {
    req.query = { limit: "5", page: "2" };

    // Mock the service to throw an error
    (getAllProductsService as jest.Mock).mockRejectedValue(
      new Error("Service failure")
    );

    await getAllProducts(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(500); // Check if 500 status returned
    expect(res.send).toHaveBeenCalledWith("Failed to retrieve products");
  });
});

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

  it("should return 400 if ID is invalid", async () => {
    req.params = { id: "invalid" };

    await getProduct(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: "Invalid product ID" });
  });
});

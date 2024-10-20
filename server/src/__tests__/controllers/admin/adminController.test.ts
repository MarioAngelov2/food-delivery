import { getAllProducts } from "../../../controllers/adminController";
import { mockRequest, mockResponse } from "../../../__mocks__";
import * as adminService from "../../../services/adminService";

describe("getProducts", () => {
  it("should return a 200 status and an array of products", async () => {
    const mockProducts = [
      { _id: 1, name: "Product 1", price: 100 },
      { _id: 2, name: "Product 2", price: 150 },
    ];

    jest
      .spyOn(adminService, "getAllProductsService")
      .mockResolvedValue(mockProducts as any);

    const req = mockRequest;
    const res = mockResponse();

    await getAllProducts(req as any, res);

    expect(res.status).toHaveBeenLastCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockProducts);
  });

  it("should return a 500 status when an error occurs", async () => {
    jest
      .spyOn(adminService, "getAllProductsService")
      .mockRejectedValue(new Error("Service Error"));

    const req = mockRequest;
    const res = mockResponse();

    await getAllProducts(req as any, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith("Failed to retrieve products");
  });
});

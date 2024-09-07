describe("Product Information", function() {
    it("should correctly store productA revenue and comission", function() {
        expect(productA.revenue).toBe(200);
        expect(productA.commision).toBe(50);
    });

    it("should corretly store productB revenue and comission", function() {
        expect(productB.revenue).toBe(300);
        expect(productB.commision).toBe(75);
    });

});
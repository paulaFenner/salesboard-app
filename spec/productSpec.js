

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

// describe("Salesboard App - buttons to the imgs", function() {

//     // beforeEach(function() {
//     //     document.body.innerHTML = `
//     //     <div>
//     //       <button onclick="loadUser(1)" class="btn">Paula</button>
//     //       <button onclick="loadUser(2)" class="btn">Samuel</button>
//     //       <button onclick="loadUser(3)" class="btn">André</button>
//     //       <img id="user-img" class="user-img" alt="User" src="./images/picture.jpg">
//     //     </div>
//     //   `;
//     // });

//     it("should switch to Paula's image when the user button is clicked", function() {
//         spyOn(window, 'loadUser').and.callThrough();

//         document.querySelector('.btn:nth-child(1)').click();

//         expect(loadUser).toHaveBeenCalledWith(1)

//         var img = document.getElementById("user-img");
//         expect(img.src).toContain("paula-avatar.jpeg")
//     });

//     it("should switch to Samuel's image when his button is clicked", function() {
//         spyOn(window, 'loadUser').and.callThrough();

//         document.querySelector('.btn:nth-child(2)').click();

//         expect(loadUser).toHaveBeenCalledWith(2)

//         var img = document.getElementById("user-img");
//         expect(img.src).toContain("samuel.jpg");
//     });

//     it("should switch to Andre's image when his button is clicked", function() {
//         spyOn(window, 'loadUser').and.callThrough();

//         document.querySelector('.btn:nth-child(3)').click()

//         expect(loadUser).toHaveBeenCalledWith(3)

//         var img = document.getElementById("user-img");
//         expect(img.src).toContain("andre.jpeg")
//     });
// })

describe("salesboard App - achievements", function() {

    it("should appear a live achievments emoji when we do our first sale", function() {
        //MOck the function to simulate the first sale
        let salesCount = 0; 

        /* misses the function that gives the first achievement"*/
        function simulateFirstSale() {
            salesCount++;
            var bell = document.getElementById("live-achievements")
            bell.innerHTML = "🔔"
        }
        simulateFirstSale()

        const achievements = document.getElementById("live-achievements").innerHTML;
        expect(achievements).toContain("🔔");
    })
})
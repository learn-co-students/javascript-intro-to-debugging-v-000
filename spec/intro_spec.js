'use strict';
describe("Jasmine Walkthrough", function(){
  describe('#sayHey', function() {
     it('should returns the string "hey friends"', function() {
       expect(sayHey()).toBe("hey friends!");
      });
      it('should return a string', function() {
        expect(sayHey()).toEqual(jasmine.any(String));
      });
   
  }); 

  describe('#sayHeyFriend', function(){
    it("should return the string 'hey friends _name_'", function (){
      expect(sayHeyFriend("kristin")).toBe("hey kristin!!")
    });
    it("should return a string'", function (){
      expect(sayHeyFriend("kristin")).toEqual(jasmine.any(String))
    });
  });

  
});
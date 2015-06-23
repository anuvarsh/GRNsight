var assert = require('chai').assert,
    xlsx = require('node-xlsx'),
    test = require('./test');
var spreadsheetController = require(__dirname + '/../server/controllers' + '/spreadsheet-controller')();


describe('adjacency-matrix-modifications', function () {
  describe('asymmetrical-graphs', function () {
    it('should not return any errors', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/asymmetric-gene-order-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/asymmetric-gene-order-output.xlsx');
    })
  })

  describe('extra-data', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/extra-data-random-cell-both-output.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/extra-data-random-cell-network-only-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/extra-data-random-cell-network-only-output.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/extra-data-random-cell-network-optimized-only-output.xlsx');
    })
  })

  describe('extra-column-adjacent', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/extra-column-adjacent-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/extra-column-adjacent-output.xlsx');
    })
  })


  describe('extra-column-end-of-sheet', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/extra-column-end-of-sheet-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/extra-column-end-of-sheet-output.xlsx');
    })
  })

  describe('extra-column-one-column-skipped', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/extra-column-one-column-skipped-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/extra-column-one-column-skipped-output.xlsx');
    })
  })

  describe('extra-row-adjacent', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/extra-row-adjacent-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/extra-row-adjacent-output.xlsx');
    })
  })

  describe('extra-row-end-of-sheet', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/extra-row-end-of-sheet-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/extra-row-end-of-sheet-output.xlsx');
    })
  })

  describe('extra-row-one-row-skipped', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/extra-row-one-row-skipped-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/extra-row-one-row-skipped-output.xlsx');
    })
  })

  describe('missing-value-top-corner', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/missing-value-top-corner-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/missing-value-top-corner-output.xlsx');
    })
  })

  describe('missing-value-middle', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/missing-value-middle-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/missing-value-middle-output.xlsx');
    })
  })

  describe('missing-value-bottom-corner', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/missing-value-bottom-corner-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/missing-value-bottom-corner-output.xlsx');
    })
  })

  describe('missing-row-top', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/missing-row-top-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/missing-row-top-output.xlsx');
    })
  })

  describe('missing-row-middle', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/missing-row-middle-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/missing-row-middle-output.xlsx');
    })
  })

  describe('missing-row-end', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/missing-row-end-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/missing-row-end-output.xlsx');
    })
  })

  describe('missing-column-top', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/missing-column-top-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/missing-column-top-output.xlsx');
    })
  })

  describe('missing-column-middle', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/missing-column-middle-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/missing-column-middle-output.xlsx');
    })
  })

  describe('missing-column-end', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/missing-column-end-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/missing-column-end-output.xlsx');
    })
  })

  describe('missing-data', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/missing-data-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/missing-data-output.xlsx');
    })
  })
  
  describe('value-replaced-with-spaces', function () {
    it('should not return any errors', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/value-replaced-w-spaces-both-output.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/value-replaced-w-spaces-net-op-only-output.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/value-replaced–w-spaces-net-only-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/value-replaced–w-spaces-net-only-output.xlsx');
    })
  })

  describe('empty-row-or-column', function () {
    it('should not return any errors', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/empty-column-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/empty-column-output.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/empty-row-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/empty-row-output.xlsx');
    })
  })

  // Adjacency Matrix Modifications - Data Types

  describe('accounting-data-type-header', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-header-accounting-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-header-accounting-input.xlsx');
    })
  })

  describe('currency-data-type-header', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-header-currency-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-header-currency-input.xlsx');
    })
  })

  describe('date-data-type-header', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-header-date-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-header-date-input.xlsx');
    })
  })

  describe('fraction-data-type-header', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-header-fraction-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-header-fraction-input.xlsx');
    })
  })

  describe('number-data-type-header', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-header-number-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-header-number-input.xlsx');
    })
  })

  describe('percentage-data-type-header', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-header-percentage-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-header-percentage-input.xlsx');
    })
  })

  describe('scientific-data-type-header', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-header-scientific-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-header-scientific-input.xlsx');
    })
  })

  describe('special-data-type-header', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-header-special-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-header-special-input.xlsx');
    })
  })

  describe('text-data-type-header', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-header-text-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-header-text-input.xlsx');
    })
  })

  describe('time-data-type-header', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-header-time-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-header-time-input.xlsx');
    })
  })

  describe('accounting-data-type-matrix', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-matrix-accounting-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-matrix-accounting-input.xlsx');
    })
  })

  describe('currency-data-type-matrix', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-matrix-currency-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-matrix-currency-input.xlsx');
    })
  })

  describe('date-data-type-matrix', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-matrix-date-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-matrix-date-input.xlsx');
    })
  })

  describe('fraction-data-type-matrix', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-matrix-fraction-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-matrix-fraction-input.xlsx');
    })
  })

  describe('number-data-type-matrix', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-matrix-number-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-matrix-number-input.xlsx');
    })
  })

  describe('percentage-data-type-matrix', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-matrix-percentage-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-matrix-percentage-input.xlsx');
    })
  })

  describe('scientific-data-type-matrix', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-matrix-scientific-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-matrix-scientific-input.xlsx');
    })
  })

  describe('special-data-type-matrix', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-matrix-special-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-matrix-special-input.xlsx');
    })
  })

  describe('text-data-type-matrix', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-matrix-text-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-matrix-text-input.xlsx');
    })
  })

  describe('time-data-type-matrix', function () {
    it('should not return any errors, but should return warnings', function () {
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-matrix-time-input.xlsx');
      test.noErrors('test-files/adjacency-matrix-modifications/data-types/data-type-matrix-time-input.xlsx');
    })
  })

})
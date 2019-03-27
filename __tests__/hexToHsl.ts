import hexToHsl from '../lib/utils/hexToHsl';

describe('hexToHsl', () => {
  const colours = [
    '#f22222',
    '#228b22',
    '#afeeee',
    '#4169e1',
    '#800080',
    '#ccc',
    '#80008044',
    '#6666'
  ];

  it('should return hsl colour for provided hex', () => {
    const expected = [
      [0, 0.8888888888888888, 0.5411764705882353],
      [120, 0.6069364161849712, 0.33921568627450976],
      [180, 0.6494845360824743, 0.8098039215686275],
      [225, 0.7272727272727272, 0.5686274509803921],
      [300, 1, 0.25098039215686274],
      [0, 0, 0.8],
      [300, 1, 0.25098039215686274, 0.27],
      [0, 0, 0.4, 0.4]
    ];

    const results = colours.map((colour) => hexToHsl(colour));

    results.forEach((result, i) => expect(result).toEqual(expected[i]));
  });

  it('should throw an error when invalid hex format', () => {
    // # + 3,4,6, and 8 characters are valid
    expect(() => hexToHsl('#f')).toThrow();
    expect(() => hexToHsl('#ff')).toThrow();
    expect(() => hexToHsl('#fffff')).toThrow();
    expect(() => hexToHsl('#fffffff')).toThrow();
  });

  //   describe('internals', () => {
  //     const hexToRgb = hexToHsl.__get__('hexToRgb');
  //     const rgbToHsl = hexToHsl.__get__('rgbToHsl');

  //     it('should return rgb colour for provided hex', () => {
  //       const expected = [255, 255, 255];

  //       const result = hexToRgb('#ffffff');

  //       expect(result).toEqual(expected);
  //     });

  //     it('should return hsl colour for provided rgb value', () => {
  //       const expected = [1, 1, 1];

  //       const result = rgbToHsl([255, 255, 255]);

  //       expect(result).toEqual(expected);
  //     });
  //   });
});

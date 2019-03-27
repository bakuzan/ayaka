import hslToHex from '../lib/utils/hslToHex';

describe('hslToHex', () => {
  const colours = [
    [0, 0.8888888888888888, 0.5411764705882353],
    [120, 0.6069364161849712, 0.33921568627450976],
    [180, 0.6494845360824743, 0.8098039215686275],
    [225, 0.7272727272727272, 0.5686274509803921],
    [300, 1, 0.25098039215686274],
    [0, 0, 0.8],
    [250, 0.64, 0.75],
    [110, 0.4, 0.5]
  ];

  it('should return hex string for provided hsl array', () => {
    const expected = [
      '#f22222',
      '#228b22',
      '#afeeee',
      '#4169e1',
      '#800080',
      '#ccc',
      '#a496e8',
      '#5eb34d'
    ];

    const results = colours.map((colour) => hslToHex(colour));

    results.forEach((result, i) => expect(result).toEqual(expected[i]));
  });
});

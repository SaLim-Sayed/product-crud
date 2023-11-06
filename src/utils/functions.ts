/**
 * Slices a given text to a specified maximum length.
 *
 * @param {string} txt - The input text to be sliced.
 * @param {number} [max=50] - The maximum length to slice the text. Default is 50.
 * @returns {string} The sliced text, which may be shorter than the maximum length.
 */
export function txtSlicer(txt: string, max: number = 50): string {
  return txt.length >= max ? txt.slice(0, max) : txt;
}

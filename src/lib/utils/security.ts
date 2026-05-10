/**
 * Escapes special characters in a string for use in HTML to prevent XSS.
 * @param str The string to escape
 * @returns The escaped string
 */
export function escapeHTML(str: string): string {
    if (!str) return '';
    const map: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
    };
    return str.replace(/[&<>"']/g, (m) => map[m]);
}

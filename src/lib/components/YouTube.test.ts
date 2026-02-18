import { render, fireEvent, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import YouTube from './YouTube.svelte';

describe('YouTube Component', () => {
  it('renders a thumbnail initially and loads iframe on click', async () => {
    render(YouTube, { id: 'test-video-id' });

    // Initially, iframe should NOT be present
    const iframe = screen.queryByTitle('YouTube video player');
    expect(iframe).toBeNull();

    // Play button should be present
    // We look for the play icon text
    const playButton = screen.getByText('play_circle');
    expect(playButton).toBeTruthy();

    // Click the container/button
    // The play button is inside a container, clicking it should trigger loading
    await fireEvent.click(playButton);

    // Now iframe should be present
    const iframeAfterClick = screen.getByTitle('YouTube video player');
    expect(iframeAfterClick).toBeTruthy();
    expect(iframeAfterClick.getAttribute('src')).toContain('autoplay=1');
  });
});

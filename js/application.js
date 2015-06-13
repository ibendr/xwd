// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  if (!xwd) if (xwdReader) xwd = xwdReader();
  GM = new GameManager(/*15, gridRows*/xwd, 96, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});

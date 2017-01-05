/**
 * Triggered on socket open.
 *
 * @function
 * @category listener
 */
OBSWebSocket.prototype.onConnectionOpened = function() {};

/**
 * Triggered on socket close.
 *
 * @function
 * @category listener
 */
OBSWebSocket.prototype.onConnectionClosed = function() {};

/**
 * Triggered on socket failure.
 *
 * @function
 * @category listener
 */
OBSWebSocket.prototype.onConnectionFailed = function() {};

/**
 * Triggered on {@link OBSWebSocket.authenticate} success.
 *
 * @function
 * @category listener
 */
OBSWebSocket.prototype.onAuthenticationSuccess = function() {};

/**
 * Triggered on {@link OBSWebSocket.authenticate} failure.
 *
 * @function
 * @category listener
 */
OBSWebSocket.prototype.onAuthenticationFailure = function() {};

/**
 * Triggered on Scene Change.
 *
 * @function
 * @category listener
 * @param sceneName {string}
 */
OBSWebSocket.prototype.onSceneSwitch = function(sceneName) {}; // jshint ignore:line

/**
 * Triggered when the scene list is modified (a scene has been created, removed, or renamed).
 * @function
 * @category listener
 * @param response {object}
 * @param response.currentScene {string} - Name of the currently active scene.
 * @param response.scenes {Array.<OBSScene>}
 */
OBSWebSocket.prototype.onSceneListChanged = function(response) {}; // jshint ignore:line

/**
 * Triggered when a request to start streaming has been issued.
 *
 * @function
 * @category listener
 */
OBSWebSocket.prototype.onStreamStarting = function() {};

/**
 * Triggered when the stream has successfully started.
 *
 * @function
 * @category listener
 */
OBSWebSocket.prototype.onStreamStarted = function() {};

/**
 * Triggered when a request to stop streaming has been issued.
 *
 * @function
 * @category listener
 */
OBSWebSocket.prototype.onStreamStopping = function() {};

/**
 * Triggered when the stream has successfully stopped.
 *
 * @function
 * @category listener
 */
OBSWebSocket.prototype.onStreamStopped = function() {};

/**
 * Triggered when a request to start recording has been issued.
 *
 * @function
 * @category listener
 */
OBSWebSocket.prototype.onRecordingStarting = function() {};

/**
 * Triggered when the recording has successfully started.
 *
 * @function
 * @category listener
 */
OBSWebSocket.prototype.onRecordingStarted = function() {};

/**
 * Triggered when a request to stop streaming has been issued.
 *
 * @function
 * @category listener
 */
OBSWebSocket.prototype.onRecordingStopping = function() {};

/**
 * Triggered when the recording has successfully stopped.
 *
 * @function
 * @category listener
 */
OBSWebSocket.prototype.onRecordingStopped = function() {};

/**
 * Triggered once per second while streaming. Emits details about the stream status.
 *
 * @function
 * @category listener
 * @param response {object}
 * @param response.streaming {bool}
 * @param response.recording {bool}
 * @param response.bytesPerSecond {int}
 * @param response.strain {int}
 * @param response.totalStreamTime {int}
 * @param response.numberOfFrames {int}
 * @param response.numberOfDroppedFrames {int}
 * @param response.fps {double}
 */
OBSWebSocket.prototype.onStreamStatus = function(response) {}; // jshint ignore:line

/**
 * Triggered when OBS has been closed.
 *
 * @function
 * @category listener
 */
OBSWebSocket.prototype.onExit = function() {};

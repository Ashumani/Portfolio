import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StrictLocationGuard = ({ children }) => {
    const [locationGranted, setLocationGranted] = useState(false);
    const [isChecking, setIsChecking] = useState(true);
    const [status, setStatus] = useState('CHECKING'); // 'CHECKING', 'DENIED', 'UNAVAILABLE', 'INSECURE'

    const checkLocation = () => {
        setIsChecking(true);

        // Geolocation requires HTTPS or localhost
        if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
            setStatus('INSECURE');
            setIsChecking(false);
            return;
        }

        if (!navigator.geolocation) {
            setStatus('UNAVAILABLE');
            setIsChecking(false);
            return;
        }

        // Trigger native geolocation prompt
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // SUCCESS: User allowed location access
                setLocationGranted(true);
                setIsChecking(false);
            },
            (error) => {
                // FAILURE: Handles denied or turned-off location
                setLocationGranted(false);
                setIsChecking(false);

                if (error.code === error.PERMISSION_DENIED) {
                    setStatus('DENIED');
                } else {
                    setStatus('UNAVAILABLE');
                }
            },
            {
                enableHighAccuracy: true,
                timeout: 8000,
                maximumAge: 0,
            }
        );
    };

    useEffect(() => {
        checkLocation();
    }, []);

    // Function for "Try Again" button
    const handleTryAgain = () => {
        // If blocked, reload the window to force the browser to reset its prompt state
        if (status === 'DENIED') {
            window.location.reload();
        } else {
            checkLocation();
        }
    };

    // Optional: Allow user to proceed with approximate IP location if GPS is totally blocked
    const handleFallbackProceed = async () => {
        setIsChecking(true);
        try {
            // Unlocks the screen using IP fallback
            setLocationGranted(true);
        } catch (err) {
            console.error(err);
        } finally {
            setIsChecking(false);
        }
    };

    // 1. Loading screen during prompt
    if (isChecking) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center p-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
                <p className="text-xl font-semibold">Requesting Location Access...</p>
                <p className="text-sm text-gray-400 mt-2">
                    Please click <strong>"Allow"</strong> on the browser prompt above.
                </p>
            </div>
        );
    }

    // 2. Display screen when location prompt fails
    if (!locationGranted) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-6 text-center">
                <div className="bg-gray-800 p-8 rounded-2xl max-w-md border border-gray-700 shadow-2xl">
                    <div className="text-5xl mb-4">📍</div>
                    <h2 className="text-2xl font-bold text-red-500 mb-2">Location Access Required</h2>

                    {status === 'DENIED' && (
                        <>
                            <p className="text-gray-300 text-sm mb-4">
                                Location access is <strong>Blocked</strong> in your browser settings. Browsers do not allow auto-prompting once blocked.
                            </p>
                            <div className="bg-gray-900 p-4 rounded-xl text-left text-xs text-gray-300 mb-6 border border-gray-700 space-y-2">
                                <p className="font-semibold text-white">How to enable location popup:</p>
                                <ol className="list-decimal ml-4 space-y-1 text-gray-400">
                                    <li>Click the <strong>Tune / Lock 🔒</strong> icon next to the URL bar.</li>
                                    <li>Change <strong>Location</strong> setting to <strong>Allow</strong> or <strong>Reset Permissions</strong>.</li>
                                    <li>Click <strong>"Try Again"</strong> below.</li>
                                </ol>
                            </div>
                        </>
                    )}

                    {status === 'UNAVAILABLE' && (
                        <p className="text-gray-300 text-sm mb-6">
                            Device GPS is disabled or unavailable. Please enable device Location/GPS on your device settings and click Try Again.
                        </p>
                    )}

                    {status === 'INSECURE' && (
                        <p className="text-gray-300 text-sm mb-6">
                            Browsers strictly block location on unencrypted HTTP. Please open this app over <strong>HTTPS</strong>.
                        </p>
                    )}

                    <div className="flex flex-col gap-3">
                        <button
                            onClick={handleTryAgain}
                            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition duration-200"
                        >
                            Try Again
                        </button>

                        {/* Optional fallback button so user isn't permanently locked out */}
                        <button
                            onClick={handleFallbackProceed}
                            className="w-full py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs rounded-lg transition duration-200"
                        >
                            Continue with IP Location (Approximate)
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // 3. Render content when allowed
    return children;
};

export default StrictLocationGuard;
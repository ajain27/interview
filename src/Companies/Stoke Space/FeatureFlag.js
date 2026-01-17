// import React, { useEffect, useState } from "react";

// const AUTH_HEADERS = {
//   "x-user-email": "candidate@stokespace.com",
//   "x-user-organization": "Stoke Space",
// };

// type FeatureFlags = Record<string, boolean>;

// export function CurrentUser() {
//   const [username, setUsername] = useState("");
//   const [featureFlags, setFeatureFlags] = useState<FeatureFlags>({});

//   // Fetch feature flags once
//   useEffect(() => {
//     async function fetchFeatureFlags() {
//       try {
//         const response = await fetch("/api/allFeatureFlags", {
//           headers: AUTH_HEADERS,
//         });
//         const data = await response.json();
//         setFeatureFlags(data);
//       } catch {
//         setFeatureFlags({});
//       }
//     }

//     fetchFeatureFlags();
//   }, []);

//   // Check feature flag
//   const isCurrentUserApiEnabled = featureFlags["currentUserApi"];

//   // Conditionally fetch current user
//   useEffect(() => {
//     if (!isCurrentUserApiEnabled) {
//       setUsername("Feature coming soon!");
//       return;
//     }

//     fetch("/api/currentUser", { headers: AUTH_HEADERS })
//       .then((r) => r.json())
//       .then((u) => setUsername(u?.user?.username || "Unknown"))
//       .catch(() => setUsername("Unknown"));
//   }, [isCurrentUserApiEnabled]);

//   return (
//     <div>
//       <h3>Current user</h3>
//       <em>{username}</em>
//     </div>
//   );
// }

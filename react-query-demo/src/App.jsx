cat > src/App.jsx <<'EOF'
import React from "react";
import PostsComponent from "./components/PostsComponent";
import { QueryClient, QueryClientProvider } from "react-query";

/*
QueryClient
QueryClientProvider
queryClient
client={queryClient}
PostsComponent
*/

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;
EOF

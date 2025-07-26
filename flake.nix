{
  description = "Spencer Delcore's personal website and blog development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs_20
            nodePackages.npm
            nodePackages.prettier
            git
          ];

          shellHook = ''
            echo "🌲 Entering Eleventy development environment"
            echo ""
            echo "Available commands:"
            echo "  npm start    - Start development server"
            echo "  npm run build - Build for production"
            echo ""
            
            # Install npm dependencies if node_modules doesn't exist
            if [ ! -d "node_modules" ]; then
              echo "📦 Installing npm dependencies..."
              npm install
            fi
          '';
        };
      }
    );
}
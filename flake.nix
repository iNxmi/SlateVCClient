{
  description = "Node.js development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs_26
            electron
          ];

          shellHook = ''
            export ELECTRON_OVERRIDE_DIST_PATH="${pkgs.electron}/bin"
            export ELECTRON_SKIP_BINARY_DOWNLOAD=1

            echo "Node: $(node --version)"
            echo "NPM:  $(npm --version)"
          '';
        };
      });
}
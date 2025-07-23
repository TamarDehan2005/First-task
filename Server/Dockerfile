# Use official Microsoft SDK image to build the app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copy solution file and project files
COPY *.sln ./
COPY API/*.csproj ./API/
COPY BLL/*.csproj ./BLL/
COPY DAL/*.csproj ./DAL/

# Restore dependencies for all projects
RUN dotnet restore

# Copy everything else and build
COPY . ./
RUN dotnet build -c Release -o /app/build

# Publish the API project
RUN dotnet publish API -c Release -o /app/publish

# Final runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/publish .

ENTRYPOINT ["dotnet", "API.dll"]

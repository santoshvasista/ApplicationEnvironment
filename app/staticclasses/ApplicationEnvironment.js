class ApplicationEnvironmentClass {
    constructor (ApplicationId, EnvironmentId, ListOfApplication, ListOfServers, ListOfDatabases, ListOfEnvironments, ListOfAppEnvServerDb) {
        this.ApplicationId = ApplicationId;
		this.EnvironmentId = EnvironmentId;
		this.ListOfApplication = ListOfApplication;
		this.ListOfServers = ListOfServers;
		this.ListOfDatabases = ListOfDatabases;
		this.ListOfAppEnvServerDb = ListOfAppEnvServerDb;
		this.ListOfEnvironments = ListOfEnvironments;
    }
}

export default ApplicationEnvironmentClass;
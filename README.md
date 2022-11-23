# Bug-Tracker
Bug/Issue/Ticket Tracker

What I want:
    User Accounts
        Login/Signup (Use Auth0)
        Create folder for user Info (stores all json file)

    SQL Database:
        USER TABLE:
            UserID (PK)
            Username
            Password
            Email
            Frozen (if true the the user will not be alloed to log in)
            Profile Picture
            Moderator (true if site moderator)
            Admin (true if site admin)

        PROJECT TABLE:
            ProjectID (PK)
            OwnerID (FK -> UserID)
            Link (Default: '' [this will be the invite link])

    NoSQL Database:
        MAIN CONCEPT (json with to-be-done, working-on, and finished):
            UserID (one-way hashed, create of the issue)
            ProjectID (so we know what project this belongs to)
            DateCreated
            DateFinished (Default: Empty)

        NOTIFICATIONS:
            UserID (one-way hashed)
            MessageNumber
            Message (hashed with key (unhashable))
            Date (date message was received)

        PROJECTS:
            ProjectID (one-way hashed)
            Issue: 
                IssueNumber
                IssueTitle
                Issue Description
                CreationDate
                Content (hashed with key)
                Tags (array with given tags)
                IssuePosition (to-be-done, working-on, or finished)
                ModifiedDate (if moved/edited then this will update. last modified will be on top)
            ReadPermissions (array with userIDs (hashed with key), they can only view it)
            EditPermissions (array with userIDs (hashed with key), they can modifiy issues)
            TeamLeaders (array with userIDs (hashed with key), they can modify who can view & who can modify the read/write     users)

        Responsive:
            Desktop Focused

        Main Concept: 
            Add Issue
            Transfer Issue (to-be-done -> working-on -> finished [& Vice Versa])
            Delete Issue
            Create Group/Teams
            Tags:
                User can create tags and add them to issues
            Filter:
                By tags
                Date created
                Date finished
                By name

        Notifications:
            Reaceive notifications:
                Changes to Issues
                Login Attampts
                Promos
            Leave Notifications:
                Leave teammate a custom notification (like message)

        Pages:
            Home Page:
                User work station with all their projects
                Create Projects
                Delete Projects

            Login/Signup Page
            Project Page:
                If user clicks on project, this page should open up, it contains all their issues for the project

            Admin Page:
                Page where admins of the website can manage user accounts
                Add User
                Delete User
                Freeze User Account
                Modify User
                Change Mod Status (give other user mod permission, allows Admin to remove mod status)

            User Page:
                Account Owner & Mods:
                    Change Profile picture
                    Change Username
                    Change Password
                    Change Email Address
                    Delete Account
                Everyone:
                    See username
                    See description
                    See profile picture
                    Share profile
        
        NavBar:
            Notifications Button
            Account Button
            Home button
            Theme button (dark/light mode)
            Admin button (Mods/Admins only)





from runwayml import RunwayML


# Replace the image link as needed for promp_image

# Use export RUNWAYML_API_SECRET=key_7ed88ef90cc1ba2bddf8b1b4dd6dcd336269f06cb347527ee12c4609575bff80eddd5e3b044fa462c3f52c27a8e3ea76d61fbbcff58acbbb64e5e8eeb44e43c7
# ^ Run above in terminal if in windows


"""

# Run commented out code first should return an id

# The env var RUNWAYML_API_SECRET is expected to contain your API key.
client = RunwayML()

task = client.image_to_video.create(
    model="gen3a_turbo",
    prompt_image="https://img.etimg.com/thumb/msid-117527471,width-650,height-488,imgsize-71994,resizemode-75/black-panther-spotted-in-india.jpg",
    prompt_text="the panther is running",
)
print(task.id)
"""
# replace id from code above with id section below. besure to alternate coding out sections or attempted to call as a function


client = RunwayML()

task = client.tasks.retrieve(id="0522fe04-fc19-4f61-a25d-584b36fbfd48")
print(task)

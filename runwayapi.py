from runwayml import RunwayML
import urllib.request
from bs4 import BeautifulSoup


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


def get_video_url_from_page(page_url):
    """
    Extracts the direct video URL from an HTML page.

    Parameters:
        page_url (str): The URL of the page containing the video.

    Returns:
        str: Direct URL to the video file (if found), else None.
    """
    req = urllib.request.Request(page_url, headers=headers)

    with urllib.request.urlopen(req) as response:
        page_content = response.read()

    soup = BeautifulSoup(page_content, "html.parser")

    # Try to find a video tag
    video_tag = soup.find("video")
    if video_tag:
        source_tag = video_tag.find("source")
        if source_tag and "src" in source_tag.attrs:
            return source_tag["src"]

    # Try common video file extensions
    for link in soup.find_all("a", href=True):
        if link["href"].endswith((".mp4", ".mov", ".avi", ".webm", ".mkv")):
            return link["href"]

    return None


def download_video(task_id, output_path="output_video.mp4"):
    """
    Retrieves the video from RunwayML and downloads it to the local system.

    Parameters:
        task_id (str): The ID of the task that generated the video.
        output_path (str): The local file path where the video will be saved.
    """
    client = RunwayML()
    task = client.tasks.retrieve(id=task_id)

    if task.status == "completed" and task.outputs:
        page_url = task.outputs.get("video")
        if page_url:
            print(f"Extracting video URL from: {page_url}")
            video_url = get_video_url_from_page(page_url)

            if video_url:
                print(f"Downloading video from: {video_url}")
                urllib.request.urlretrieve(video_url, output_path)
                print(f"Download complete: {output_path}")
            else:
                print("Failed to find direct video URL.")
        else:
            print("No video page URL found in task outputs.")
    else:
        print(f"Task is not completed yet. Status: {task.status}")


# Example usage
task_id = "0522fe04-fc19-4f61-a25d-584b36fbfd48"  # Replace with your actual task ID
download_video(task_id, "my_video.mp4")
